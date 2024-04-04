<template>
  <div class="listUser">
    <UserItem
      v-for="user in props.searchUser
        ? useUserStore().getUsersByName(props.searchUser)
        : useUserStore().users"
      :key="user._id"
      :user="user"
      @click="$emit('userChated', user)"
    />
  </div>
</template>

<script setup>
import UserItem from './UserItem.vue'
import { useUserStore } from '@/stores/user.store'

const props = defineProps(['searchUser'])
</script>

<style scoped>
.listUser {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
}

.listUser::-webkit-scrollbar {
  color: transparent;
  height: 0;
}
</style>
