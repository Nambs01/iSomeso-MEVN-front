<template>
  <div class="columns mx-0 py-1 chat">
    <div class="column is-3 p-0 avatar">
      <div v-if="!true" class="has-text-centered">
        <img class="avatar" :src="'data:image/type;base64,'" width="75" height="75" />
        <!-- <span v-if="props.user.actif" class="actif"></span> -->
      </div>
      <div v-else class="icon-text">
        <span class="icon is-large">
          <i class="mdi mdi-48px mdi-account-circle-outline"></i>
        </span>
        <span v-if="user.actif" class="actif"></span>
      </div>
    </div>

    <div class="column p-0 messageText">
      <p>{{ user.name }}</p>
      <p class="has-text-grey is-size-7">
        {{ minText(props.discussion.text) }}
      </p>
      <p class="has-text-grey is-size-7">
        {{ formatTime(props.discussion.createdAt) }}
      </p>
    </div>
    <div v-if="!props.discussion.vue" class="column is-1 point">
      <div class="point-bleu"></div>
    </div>
  </div>
</template>

<script setup>
import { userChated } from '../utils/userChated'
import { formatTime } from '../utils/formatTime'
import { onMounted, reactive, ref, watch } from 'vue'

const props = defineProps(['discussion'])
const user = reactive({
  _id: '',
  name: '',
  avatar: {},
  actif: false
})

// onMounted(() => {
//   try {
//     if (props.discussion._id) {
//       user.value = userChated(props.discussion)

//       console.log(user)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// })

watch(props.discussion, () => {
  if (props.discussion._id) {
    const result = userChated(props.discussion)
    user._id = result._id
    user.name = result.name
    user.avatar = result.avatar
    user.actif = result.actif
    console.log(user)
  }
})

const minText = (text) => {
  if (text.length > 30) {
    return text.substr(0, 30) + '...'
  }
  return text
}
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
.actif {
  position: absolute;
  outline: 4px solid #0a0a0a;
  right: 6px;
  bottom: 6px;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background: rgb(4, 199, 4);
}
</style>
