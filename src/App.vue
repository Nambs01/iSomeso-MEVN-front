<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

onMounted(() => {
  useAuthStore().init()
})
</script>

<template>
  <RouterView />
</template>
