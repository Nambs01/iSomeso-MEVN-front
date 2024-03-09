<template>
  <div class="columns mx-0 p-0">
    <div class="column is-4 p-0 avatar">
      <svg height="75" width="75" class="p-0">
        <circle cx="37.5" cy="37.5" r="30" stroke="white" stroke-width="3" />
      </svg>
    </div>
    <div class="column p-0 messageText">
      <p>{{ nameUser() }}</p>
      <p>{{ props.message.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store'

const props = defineProps(['message'])
const me = useAuthStore().me

const nameUser = () => {
  return me._id === props.message.from._id ? props.message.to.name : props.message.from.name
}
</script>

<style scoped>
.avatar {
  display: grid;
  align-content: center;
  justify-content: center;
}
.messageText {
  display: grid;
  align-content: center;
  justify-content: start;
}
</style>
