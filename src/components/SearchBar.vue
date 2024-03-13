<template>
  <div class="mt-2 mb-5">
    <div class="control has-icons-left">
      <input
        type="text"
        class="input is-rounded is-desktop-medium is-primary"
        placeholder="Rechercher"
      />
      <span class="icon is-left has-text-primary">
        <i class="mdi mdi-magnify"></i>
      </span>
    </div>
  </div>
</template>

<style scoped>
input {
  color: rgba(255, 255, 255, 0.84);
  background: transparent;
}

input::placeholder {
  color: rgba(235, 235, 235, 0.64);
}
</style>
