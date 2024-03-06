<template>
  <main>
      <Navbar :user="auth.user" />

      <div class="columns hero is-fullheight-with-navbar mx-0"> 
        <div class="column hero is-3-desktop is-4-tablet is-12-mobile is-black">
          <div class="row p-4">
            <SearchBar />
            <ListMessages :messages="messagesStore.messages"/>
          </div>
        </div>
        
        <div class="column main">
          <div class="title is-3 has-text-primary">
            <p>
              <span>Nouveau message</span>
              <span class="icon mx-4">
                <i class="mdi mdi-pencil-box-multiple-outline"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import SearchBar from '../components/SearchBar.vue'
import ListMessages from '../components/ListMessages.vue'
import { useAuthStore } from '@/stores/auth.store';
import { useMessageStore } from '@/stores/message.store';

const auth = useAuthStore()
const messagesStore = useMessageStore()
</script>

<style scoped>
.is-fullheight-with-navbar{
  flex-direction: row;
  /* padding: 0; */
}

.column{
  padding: 0;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
