<script setup>
import { useAuthStore } from '@/stores/auth.store';
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted } from 'vue';

onMounted(() => {
  useAuthStore().init()
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
