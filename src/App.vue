<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

onMounted(async () => {
  await useAuthStore().init()
})
</script>

<template>
  <RouterView />
</template>
