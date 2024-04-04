<template>
  <div class="mt-2 mb-4">
    <div class="control has-icons-left">
      <input
        type="text"
        class="input is-rounded is-desktop-medium is-primary"
        placeholder="Rechercher"
        v-model="searchValue"
      />
      <span class="icon is-left has-text-primary">
        <i class="mdi mdi-magnify"></i>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['nameValue'])

const searchValue = ref('')
watch(searchValue, (value) => {
  emit('nameValue', value)
})
</script>

<style scoped>
input {
  color: rgba(255, 255, 255, 0.84);
  background: transparent;
}

input::placeholder {
  color: rgba(235, 235, 235, 0.64);
}
</style>
