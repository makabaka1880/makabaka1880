<template>
  <div style="padding: 16px;">
    <div v-for="section in sections" :key="section.title">
      <!-- Section Title -->
      <h2 style="font-size: 1.75rem; margin-bottom: 16px; font-weight: bold;">{{ section.title }}</h2>
      <!-- Friends in this section -->
    <div v-for="friend in section.friends" :key="friend.name" style="display: flex; align-items: top; gap: 16px; margin-bottom: 16px; padding: 8px;">
    <img :src="friend.avatar" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%;" />
      <div style="display: flex; flex-direction: column;">
    <!--MARK-->
    <div style="font-size: 1.5rem; font-weight: bold; padding-bottom: 4px;">
      {{ friend.name }} 
      <span style="font-size: 1rem; font-weight: normal; color: #555;">({{ friend.role }})</span>
    <!-- New Email and Website fields -->
    <div style="font-size: 1rem; color: #555; padding-top: 4px;">
      <a :href="'mailto:' + friend.email" style="color: #0066cc; text-decoration: none;">{{ friend.email }}</a>
    </div>
    <div style="font-size: 1rem; color: #555; padding-top: 4px;">
      <a :href="friend.website" target="_blank" style="color: #0066cc; text-decoration: none;">{{ friend.website }}</a>
    </div>
    </div>
    <div style="font-size: 1rem; color: gray;">{{ friend.description }}</div>
    
  </div>
</div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: []
    };
  },
  mounted() {
    fetch('/static/FriendList_enUS.json')
      .then(response => response.json())
      .then(data => {
        this.sections = data;
      })
      .catch(error => console.error('Error loading friends data:', error));
  }
};
</script>
