<template>
  <div class="my-5">
    <DiscussionItem
      class="my-1"
      v-for="discussion in discussionsStore.discussions"
      :discussion="discussion"
      :key="discussion._id"
      @click="$emit('userChated', userChated(discussion))"
    />
  </div>
</template>

<script setup>
import DiscussionItem from './DiscussionItem.vue'
import { userChated } from '../utils/userChated'
import { useDiscussionStore } from '@/stores/discussion.store'
import { onMounted } from 'vue'

const discussionsStore = useDiscussionStore()

onMounted(async () => {
  await discussionsStore.getLastMessages()
})
</script>

<style scoped></style>
