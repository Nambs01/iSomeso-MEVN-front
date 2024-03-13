<template>
  <div class="hero is-fullheight-with-navbar m-0">
    <div class="hero-head has-text-primary is-size-5">
      <div class="mr-3 is-fullwidth">
        <img v-if="!true" :src="'data:image/type;base64,'" width="75" height="75" />
        <div v-else class="icon-text">
          <span class="icon is-medium">
            <i class="mdi mdi-36px mdi-account-circle-outline"></i>
          </span>
        </div>
      </div>
      <p>{{ props.user.name }}</p>
    </div>

    <div class="hero-body">
      <MessageItem v-for="message in useMessageStore().messages" :key="message._id" :message="message"/>
    </div>
    
    <div class="hero-foot">
      <div class="columns m-0">
        <div class="column is-11">
          <input type="text" class="input is-primary" placeholder="Texte de message" v-model="textMessage" autofocus>
        </div>
        
        <div class="column is-1">
          <button class="button is-primary">
            <span class="icon has-text-dark">
              <i class="mdi mdi-send mdi-24px"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MessageItem from './MessageItem.vue';
import { ref } from 'vue';
import { useMessageStore } from '@/stores/message.store';

const props = defineProps(['user'])
const textMessage = ref('')

</script>

<style scoped>
/* button{
  border-radius: 5px;
} */
input {
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.909);
  background: transparent;
}

input::placeholder {
  color: rgba(235, 235, 235, 0.64);
}
.hero {
  display: grid;
  justify-content: unset;
  width: 100%;
  /* background-image: url('../assets/wallpaperflare.com_wallpaper (19).jpg');
  background-size:cover;
  background-position: center; */
}
.hero-head {
  background: #101010;
  display: flex;
  align-items: center;
  /* mask-image: linear-gradient(transparent, black);   */
  padding-left: 20px;
  grid-row-start: 1;
  grid-row-end: 1.5;
  z-index: 5;
}
.hero-body {
  display: flex !important;
  flex-direction: column;
  grid-row-start: 2;
  grid-row-end: 11;
}
.hero-foot {
  display: grid;
  align-items: end;
  grid-row-start: 11;
  grid-row-end: 12;
}
.icon-text {
  margin-top: 15px;
}
</style>
