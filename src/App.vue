<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth.store';
import { useMessageStore } from '@/stores/message.store';

onMounted( () => {
  useAuthStore().init()
  useMessageStore().getLastMessages()
})
</script>

<template>
  <RouterView />
</template>

