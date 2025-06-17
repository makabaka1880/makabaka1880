import { defineClientConfig } from 'vuepress/client'
import FriendList from './components/FriendList.vue'
import FriendList_enUS from './components/FriendList_enUS.vue'
import Schematic from './components/Schematic.vue'
import QED from './components/QED.vue'
import Audio from './components/Audio.vue'
import Anchor from './components/Anchor.vue'
import NextPage from './components/NextPage.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('FriendList', FriendList)
    app.component('FriendList_enUS', FriendList_enUS)
    app.component('Schematic', Schematic)
    app.component('QED', QED)
    app.component('Audio', Audio)
    app.component('Anchor', Anchor)
    app.component('NextPage', NextPage)
  },
})