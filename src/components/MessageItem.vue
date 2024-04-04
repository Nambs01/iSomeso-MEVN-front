<template>
  <div class="content">
    <p class="mb-4 has-text-light is-size-7">{{ formatTime(props.message.createdAt) }}</p>
    <div :class="sendToUser() ? 'to' : 'from'">
      <p class="textMessage">
        {{ props.message.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store'
import { formatTime } from '../utils/formatTime'

const auth = useAuthStore().me
const props = defineProps(['message'])

const sendToUser = () => {
  if (auth._id == props.message.to) return true
  else return false
}
</script>

<style scoped>
.content {
  position: relative;
  text-align: center;
  width: 100%;
}
.to {
  display: grid;
  justify-items: left;
}
.from {
  display: grid;
  justify-items: right;
}
.textMessage {
  background: #00c4a7;
  color: rgba(255, 255, 255, 0.868);
  border-radius: 18px;
  padding: 5px 15px;
  height: max-content;
  max-width: 60%;
  width: fit-content;
  margin: 0px;
  text-align: left;
}
.textMessage:hover {
  cursor: pointer;
}

.to .textMessage {
  background: black;
}

.content p:not(:last-child) {
  margin-bottom: 0;
}
</style>
