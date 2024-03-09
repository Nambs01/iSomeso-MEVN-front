<template>
  <div class="my-5">
    <MessageItem v-for="message in props.messages" :message="message" :key="message._id" />
  </div>
</template>

<script setup>
import MessageItem from './MessageItem.vue'

const props = defineProps(['messages'])
</script>

<style scoped></style>
