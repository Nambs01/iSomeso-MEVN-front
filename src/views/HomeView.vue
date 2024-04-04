<template>
  <main>
    <Navbar class="nav" />

    <div class="columns hero is-fullheight-with-navbar navMess is-multiline mx-0">
      <div class="column hero is-3-desktop is-4-tablet is-12-mobile is-black">
        <div class="row p-4">
          <SearchBar @nameValue="emitNameUser" />
          <ListeUsers :searchUser="searchValue" @userChated="ouvrirDiscussion" />
          <ListDiscussions @userChated="ouvrirDiscussion" />
        </div>
      </div>

      <div :class="'column' + (!userChated.values ? ' main' : '')">
        <div v-if="!userChated.values" class="title is-3 has-text-primary">
          <p>
            <span>Nouveau message</span>
            <span class="icon mx-4">
              <i class="mdi mdi-pencil-box-multiple-outline"></i>
            </span>
          </p>
        </div>

        <ListeMessages v-else :user="userChated.values" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useMessageStore } from '@/stores/message.store'
import Navbar from '../components/Navbar.vue'
import SearchBar from '../components/SearchBar.vue'
import ListDiscussions from '../components/ListeDiscussions.vue'
import ListeMessages from '@/components/ListeMessages.vue'
import ListeUsers from '@/components/ListeUsers.vue'

import { watch } from 'vue'
import { useUserStore } from '../stores/user.store'
import { useAuthStore } from '../stores/auth.store'

import { io } from 'socket.io-client'

const userChated = reactive({})
const searchValue = ref()
const isConnected = ref(false)

const onlineUsers = reactive({})
const socket = io('http://localhost:5000', {
  autoConnect: true
})

onMounted(async () => {
  try {
    await useUserStore().getAllUsers()
    if (!isConnected.value && useAuthStore().me._id && useUserStore().users[0].name) {
      socket.emit('addNewUser', useAuthStore().me._id)
      isConnected.value = true
    }
    socket.on('getOnlineUsers', async (res) => {
      if (res) {
        onlineUsers.value = res
      }
    })
  } catch (error) {
    console.log(error)
  }
})

watch(onlineUsers, async () => {
  await useUserStore().updateOnlineUsers(onlineUsers.value)
})

const emitNameUser = (data) => {
  if (data) {
    searchValue.value = data
    return true
  }
  searchValue.value = ''
}

const ouvrirDiscussion = async (user) => {
  if (userChated.values != user) {
    userChated.values = user
    await useMessageStore().getMessages(user._id)
  }
}
</script>

<style scoped>
main {
  position: relative;
  overflow-y: scroll;
}
.nav {
  position: fixed;
  top: 0;
  width: 100%;
}
.navMess {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
}
.is-fullheight-with-navbar {
  flex-direction: row;
  /* padding: 0; */
}

.column {
  padding: 0;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
