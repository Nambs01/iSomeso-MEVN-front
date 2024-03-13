<template>
  <div class="content">
    <p>{{ temps }}</p>
    <p :class="destinataire() ? 'textMessage destinataire' : 'textMessage'">{{ props.message.text }}</p>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store';

const auth = useAuthStore().me
const props = defineProps(['message'])

const temps = (new Date(props.message.createdAt)).toLocaleString()

const destinataire = () => {
  if(auth._id == props.message.to)
    return true
  else return false
}
</script>

<style scoped>
.content {
  text-align: center;
  width: 100%;
}
.textMessage {
  background: black;
  color: rgba(255, 255, 255, 0.868);
  border-radius: 20px;
  padding: 5px 10px;
  height: max-content;
  width: max-content;
}

.destinataire {
  background: #00C4A7;
  float: right;
}
</style>