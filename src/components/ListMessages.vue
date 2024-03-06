<template>
  <div class="my-5">
      <div class="mb-2 p-2" v-for="message in props.messages" :key="message._id" style="background: red;">
        <p>{{ message.createdAt }}</p>
        <p>{{ message.text }}</p>
      </div>
  </div>
</template>

<script setup>

const props = defineProps(['messages'])

</script>

<style scoped>

</style>