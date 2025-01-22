import { defineClientConfig } from 'vuepress/client'
import FriendList from './components/FriendList.vue'
import FriendList_enUS from './components/FriendList_enUS.vue'
import Schematic from './components/Schematic.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('FriendList', FriendList)
    app.component('FriendList_enUS', FriendList_enUS)
    app.component('Schematic', Schematic)
  },
})