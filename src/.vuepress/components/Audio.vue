<template>
	<div class="audio-player">
	  <audio ref="audio" :src="src" :name="fileName" @timeupdate="updateTime" @loadedmetadata="setDuration" @ended="handleEnd" />
	  <div class="player-content">
		<div class="controls">
		  <button class="play-button" @click="togglePlay">
			<svg v-if="!isPlaying" width="24" height="24" viewBox="0 0 24 24">
			  <path fill="currentColor" d="M8 5v14l11-7z"/>
			</svg>
			<svg v-else width="24" height="24" viewBox="0 0 24 24">
			  <path fill="currentColor" d="M6 4h4v16H6zm8 0h4v16h-4z"/>
			</svg>
		  </button>
		  
		  <div class="track-info">
			<div class="track-name">{{ fileName }}</div>
			<div class="time-display">
			  {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
			</div>
		  </div>
		</div>
  
		<div class="progress-bar">
		  <input
			type="range"
			:max="duration"
			step="0.1"
			v-model="currentTime"
			@input="seek"
			class="progress-slider"
		  />
		  <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
		</div>

		<div class="lyrics-container" v-if="lyrics.length">
		<div 
			class="lyric-line"
			v-for="(line, index) in lyrics"
			:key="index"
			:class="{ active: isLineActive(index) }"
		>
        {{ line.text }}
      </div>
    </div>
	  </div>
	</div>
  </template>
  
	<script setup>
	import { ref, computed, watch, onMounted } from 'vue'
	
	const props = defineProps({
	src: { type: String, required: true },
	fileName: { type: String, required: true },
	lyrics: { type: String, default: '' }
	})
	
	const audio = ref(null)
	const isPlaying = ref(false)
	const currentTime = ref(0)
	const duration = ref(0)

	
	const progressPercentage = computed(() => {
	return (currentTime.value / duration.value) * 100 || 0
	})

const volume = ref(1)
const previousVolume = ref(1)

function updateVolume() {
  if (audio.value) {
    audio.value.volume = volume.value
  }
}

function toggleMute() {
  if (volume.value > 0) {
    previousVolume.value = volume.value
    volume.value = 0
  } else {
    volume.value = previousVolume.value
  }
  updateVolume()
}

// Add watcher to sync volume with audio element
watch(volume, (newVal) => {
  if (audio.value) {
    audio.value.volume = newVal
  }
})

function togglePlay() {
	if (!audio.value) return
	if (isPlaying.value) {
		audio.value.pause()
	} else {
		audio.value.play()
	}
	isPlaying.value = !isPlaying.value
}

function updateTime() {
	currentTime.value = audio.value.currentTime
}

function setDuration() {
	duration.value = audio.value.duration
}

function handleEnd() {
	isPlaying.value = false
}

function seek() {
	if (audio.value) {
	audio.value.currentTime = currentTime.value
	}
}

function formatTime(seconds) {
	const min = Math.floor(seconds / 60)
	const sec = Math.floor(seconds % 60).toString().padStart(2, '0')
	return `${min}:${sec}`
}

// Add these new reactive properties
const parsedLyrics = ref([])
const activeLyricIndex = ref(-1)
// Parse LRC format
const fetchLyrics = async () => {
  if (!props.lyrics) return;
  
  try {
    const response = await fetch(props.lyrics);
    const text = await response.text();
    parsedLyrics.value = parseLyrics(text);
  } catch (error) {
    console.error('Failed to load lyrics:', error);
  }
}
function parseLyrics(lyricText) {
  if (!lyricText) return [];
  
  const lines = lyricText.split('\n');
  const pattern = /^\[(\d+):(\d+\.\d+)\](.+)/;

  return lines
    .map(line => {
      const match = line.match(pattern);
      if (!match) return null;
      
      try {
        const minutes = parseInt(match[1], 10);
        const seconds = parseFloat(match[2]);
        return {
          time: minutes * 60 + seconds,
          text: match[3].trim()
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort((a, b) => a.time - b.time); // Ensure chronological order
}

function updateActiveLyric() {
  const current = audio.value?.currentTime || 0;
  let low = 0;
  let high = parsedLyrics.value.length - 1;
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (parsedLyrics.value[mid].time <= current) {
      activeLyricIndex.value = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

function isLineActive(index) {
  return index === activeLyricIndex.value
}

// Watch for lyrics changes
onMounted(() => {
  if (props.lyrics) {
    fetchLyrics();
  }
})

// Update lyrics during playback
watch(currentTime, updateActiveLyric)

</script>


<style scoped>
.volume-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  padding-left: 1rem;
  position: relative;
}

.volume-button {
  background: none;
  border: none;
  color: var(--text-secondary);
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.volume-button:hover {
  color: var(--cyan-primary);
}

.volume-slider {
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  appearance: none;
  opacity: 0;
  transition: all 0.2s ease;
}

.volume-control:hover .volume-slider,
.volume-slider:focus {
  opacity: 1;
  width: 100px;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  background: var(--cyan-primary);
  border-radius: 50%;
  cursor: pointer;
}

.audio-player {
	--cyan-primary: #0aa;
	--cyan-hover: #055;
	--background: #000;
	--surface: #033;
	--text-primary: #FFFFFF;
	--text-secondary: #B0B0B0;

	background: var(--surface);
	border-radius: 12px;
	padding: 1.25rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;
}

.player-content {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.controls {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.play-button {
	background: var(--cyan-primary);
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;
	color: white;
}

.play-button:hover {
	background: var(--cyan-hover);
	transform: scale(1.05);
}

.play-button:active {
	transform: scale(0.95);
}

.track-info {
	flex-grow: 1;
}

.track-name {
	font-weight: 500;
	color: var(--text-primary);
	font-size: 1rem;
	margin-bottom: 0.25rem;
}

.time-display {
	font-size: 0.875rem;
	color: var(--text-secondary);
}

.progress-bar {
	position: relative;
	height: 4px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 2px;
}

.progress-fill {
	position: absolute;
	height: 100%;
	background: var(--cyan-primary);
	border-radius: 2px;
	transition: width 0.1s linear;
}

.progress-slider {
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
	z-index: 1;
}

.progress-slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	width: 16px;
	height: 16px;
}

/* Pulse animation when playing */
.audio-player:has(.play-button:hover) {
	box-shadow: 0 4px 16px rgba(0, 188, 212, 0.3);
}

@keyframes pulse {
	0% { box-shadow: 0 0 0 0 rgba(0, 188, 212, 0.4); }
	70% { box-shadow: 0 0 0 10px rgba(0, 188, 212, 0); }
	100% { box-shadow: 0 0 0 0 rgba(0, 188, 212, 0); }
}

.play-button[data-playing="true"] {
	animation: pulse 2s infinite;
}

.lyrics-container {
  max-height: 200px;
  overflow-y: auto;
  padding: 1rem;
  margin-top: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.lyric-line {
  color: var(--text-secondary);
  margin: 0.5rem 0;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.lyric-line.active {
  color: var(--cyan-primary);
  font-weight: 500;
  transform: scale(1.02);
  opacity: 1;
}

/* Add to existing CSS */
.audio-player {
  /* Keep existing styles */
  max-width: 600px; /* Add constraint for better lyrics reading */
}

</style>