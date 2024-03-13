<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar is-black px-5">
    <div class="navbar-brand">
      <RouterLink to="/" class="has-text-primary is-size-2">
        <IconMessage />
        <span class="pl-3">iSomeso</span>
      </RouterLink>
    </div>

    <div class="navbar-menu columns is-vcentered">
      <div class="navbar-end">
        <div class="dropdown is-right is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button is-primary is-outlined is-rounded is-size-7"
              aria-haspopup="true"
              aria-controls="dropdown-menu1"
            >
              <span class="icon">
                <i class="mdi mdi-account-circle-outline"></i>
              </span>
              <span>{{ user.me.email }}</span>
            </button>
          </div>

          <div class="dropdown-menu is-size-7" id="dropdown-menu1" role="menu">
            <div class="dropdown-content pt-0">
              <div class="has-text-centered py-4">
                <img
                  v-if="!true"
                  class="avatar"
                  :src="'data:image/' + user.me.avatar.type + ';base64,' + user.me.avatar.base64"
                  width="75"
                  height="75"
                />
                <div v-else class="icon-text">
                  <span class="icon is-medium is-black">
                    <i class="mdi mdi-36px mdi-account-circle-outline"></i>
                  </span>
                </div>
                <p class="has-text-black is-size-6">{{ user.me.name }}</p>
              </div>
              <RouterLink to="/" class="navbar-item">
                <span class="icon">
                  <i class="mdi mdi-account-cog-outline"></i>
                </span>
                <span>Gerer le compte</span>
              </RouterLink>
              <RouterLink to="/" class="navbar-item button is-danger is-light is-small py-4">
                <span class="icon">
                  <i class="mdi mdi-logout"></i>
                </span>
                <span>Deconnecter</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import IconMessage from './icons/IconMessage.vue'
import { useAuthStore } from '@/stores/auth.store'

const user = useAuthStore()
</script>

<style scoped>
.avatar {
  border-radius: 150px;
  outline: 3px solid rgb(2, 158, 255);
  outline-offset: 3px;
}
</style>
