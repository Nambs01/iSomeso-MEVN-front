<template>
  <div class="columns mx-0 py-1 chat">
    <div class="column is-3 p-0 avatar">
      <div v-if="!true" class="has-text-centered">
        <img class="avatar" :src="'data:image/type;base64,'" width="75" height="75" />
      </div>
      <div v-else class="icon-text">
        <span class="icon is-large">
          <i class="mdi mdi-48px mdi-account-circle-outline"></i>
        </span>
      </div>
    </div>

    <div class="column p-0 messageText">
      <p>{{ nameUser }}</p>
      <p>{{ props.discussion.text }}</p>
    </div>
    <div v-if="props.discussion.vue" class="column is-1 point">
      <div class="point-bleu"></div>
    </div>
  </div>
</template>

<script setup>
import { userChated } from '../utils/userChated'
const props = defineProps(['discussion'])
const nameUser = userChated(props.discussion).name
</script>

<style scoped>
.avatar {
  display: grid;
  align-content: center;
  justify-content: center;
}
.messageText {
  display: grid;
  align-content: center;
  justify-content: start;
}
.chat {
  border-radius: 15px;
  display: flex;
}
.icon-text {
  margin-top: 15px;
}
.chat:hover {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 0.2);
}
.point {
  display: grid;
  align-items: center;
  justify-content: end;
}
.point-bleu {
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: rgb(0, 89, 255);
}
</style>
