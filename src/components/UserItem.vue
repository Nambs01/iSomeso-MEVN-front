<template>
  <div class="user">
    <div class="avatar">
      <div v-if="!true" class="has-text-centered">
        <img class="avatar" :src="'data:image/type;base64,'" width="75" height="75" />
        <span v-if="props.user.actif" class="actif"></span>
      </div>
      <div v-else class="icon-text">
        <span class="icon is-large">
          <i class="mdi mdi-48px mdi-account-circle-outline"></i>
        </span>
        <span v-if="props.user.actif" class="actif"></span>
      </div>
    </div>
    <p class="name">{{ props.user.name }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['user'])
</script>

<style scoped>
.user{
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  border-radius: 8px;
  margin: 0px 5px;
  padding: 10px 10px;
  width: fit-content;
}
.user:hover {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 0.2);
}
.avatar{
  position: relative;
}
.name{
  min-width: max-content;
}
.actif{
  position: absolute;
  outline: 4px solid #0A0A0A;
  right: 6px;
  bottom: 6px;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background: rgb(4, 199, 4);
}
</style>