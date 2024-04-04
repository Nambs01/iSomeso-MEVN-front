<template>
  <div class="hero div1 is-fullheight-with-navbar m-0">
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
    <div class="hero-body" id="messages" ref="messagesRef">
      <MessageItem
        v-for="message in useMessageStore().messages"
        :key="message._id"
        :message="message"
      />
    </div>

    <div class="hero-foot columns m-0">
      <div class="textInput column is-11">
        <input
          type="text"
          class="input is-primary"
          placeholder="Texte de message"
          v-model="text"
          autofocus
        />
      </div>

      <div class="column is-11">
        <button class="button is-primary" @click="send" :disabled="!text">
          <span class="icon has-text-dark">
            <i class="mdi mdi-send mdi-24px"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MessageItem from './MessageItem.vue'
import { onUpdated, ref } from 'vue'
import { useMessageStore } from '@/stores/message.store'
import { nextTick } from 'vue'

const props = defineProps(['user'])
const text = ref(null)

const messagesRef = ref()

const autoscroll = async () => {
  await nextTick(() => {
    const $messages = messagesRef.value
    if ($messages) {
      $messages.scrollTop = $messages.scrollHeight
    }
  })
}

const send = async () => {
  await useMessageStore().sendMessage(props.user._id, text.value)
  text.value = ''
}

onUpdated(() => {
  autoscroll()
})
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
.div1 {
  position: relative !important;
  left: 0;
  width: 100%;
}
.hero {
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  justify-content: unset;
  height: 2px;
  /* background-image: url('../assets/wallpaperflare.com_wallpaper (19).jpg');
  background-size:cover;
  background-position: center; */
}
.hero-head {
  position: fixed;
  width: 100%;
  background: #101010;
  display: flex;
  align-items: center;
  /* mask-image: linear-gradient(transparent, black);   */
  padding: 10px 20px;
  grid-row: 1/2;
  z-index: 10;
}
.hero-body {
  display: flex !important;
  flex-direction: column;
  grid-row: 2 / 12;
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 0;
  padding-right: 10px;
}
.hero-body::-webkit-scrollbar {
  color: transparent;
}
.hero-foot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 15px;
  padding: 10px;
  width: 100%;
  background: #101010;
  grid-row: 12/13;
}
.icon-text {
  margin-top: 15px;
}
</style>
