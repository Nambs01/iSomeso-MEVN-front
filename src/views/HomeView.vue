<template>
  <main>
    <Navbar />

    <div class="columns hero is-fullheight-with-navbar is-multiline mx-0">
      <div class="column hero is-3-desktop is-4-tablet is-12-mobile is-black">
        <div class="row p-4">
          <SearchBar />
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
        <!-- </RouterView> -->
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user.store'
import { useMessageStore } from '@/stores/message.store'
import Navbar from '../components/Navbar.vue'
import SearchBar from '../components/SearchBar.vue'
import ListDiscussions from '../components/ListeDiscussions.vue'
import ListeMessages from '@/components/ListeMessages.vue'
import { onMounted } from 'vue'

const userChated = reactive({})

const ouvrirDiscussion = (data) => {
  if (userChated.values != data) {
    userChated.values = data
    useMessageStore().getMessages(data._id)
  }
}

onMounted(() => {
  useUserStore().getAllUsers()
})
</script>

<style scoped>
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
