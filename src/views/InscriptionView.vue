<template>
  <div class="center">
    <div class="inscription">
      <IconLogin1 />
      <div class="box">
        <div class="form">
          <h1>Inscription</h1>
          <div class="inputbox">
            <input type="text" v-model="name" required />
            <span>Username</span>
            <i></i>
          </div>
          <!-- <div class="errorMessage">** Ce compte n'existe pas **</div> -->
          <div class="inputbox">
            <input type="email" v-model="email" required />
            <span>Adresse email</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input type="password" v-model="password" required />
            <span>Mots de passe</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input type="password" v-model="confirmPassword" required />
            <span>Confirmer mots de passe</span>
            <i></i>
          </div>
          <!-- <div class="errorMessage">** Mot de passe incorrect **</div> -->
          <input type="submit" value="Valider" @click="validation" />
          <input type="submit" value="Se connecter" @click="router.back()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '@/assets/loginStyle.css'
import router from '@/router'
import IconLogin1 from '@/components/icons/IconLogin1.vue'
import { useUserStore } from '@/stores/user.store'

const user = useUserStore()

const name = ref()
const email = ref()
const password = ref()
const confirmPassword = ref()

const validation = () => {
  if (password.value === confirmPassword.value) {
    user.createUser({
      name: name.value,
      email: email.value,
      password: password.value.toString()
    })
  }
}
</script>

<style scoped>
h1 {
  color: var(--color-heading);
}
.inscription {
  display: grid;
  margin-bottom: 50px;
}
.box {
  height: 600px;
}
</style>
