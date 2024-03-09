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
              <span>{{ props.user.email }}</span>
            </button>
          </div>

          <div class="dropdown-menu is-size-7" id="dropdown-menu1" role="menu">
            <div class="dropdown-content pt-0">
              <div
                style="
                  position: relative;
                  height: 75px;
                  margin-bottom: 50px;
                  border-radius: 5px 5px 0 0;
                "
              >
                <!-- <svg height="100" width="100" style="position: absolute; bottom: -50px;left: 45px;">
                  <circle cx="50" cy="50" r="40" stroke="white" stroke-width="3" fill="grey" />
                </svg> -->
                <img
                  v-if="props.user.avatar.type"
                  :src="
                    'data:image/' + props.user.avatar.type + ';base64,' + props.user.avatar.base64
                  "
                />
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
const props = defineProps(['user'])
</script>

<style scoped></style>
