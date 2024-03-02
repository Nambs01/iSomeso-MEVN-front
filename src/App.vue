<script setup>
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth.store';
onBeforeMount( () => {
  useAuthStore().init()
})
</script>

<template>
  <RouterView />
</template>

