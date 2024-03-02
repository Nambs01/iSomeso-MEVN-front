<template>
  <div class="login">
    <div class="box">
      <div class="form">
          <h1><CommunityIcon/>  iSomeso</h1>
          <div class="inputbox">
              <input type="text" v-model="email" required>
              <span>Adresse email</span>
              <i></i>
          </div>
          <div v-if="auth.errorMessage === 'Unable email'" class="errorMessage">** Ce compte n'existe pas **</div>
          <div class="inputbox">
              <input type="password" v-model="password" required>
              <span>Mots de passe</span>
              <i></i>
          </div>
          <div v-if="auth.errorMessage === 'Unable password'" class="errorMessage">** Mot de passe incorrect **</div>
          <div class="links">
              <RouterLink to="/">Mots de passe oublie?</RouterLink>
              <RouterLink to="/inscription">Inscription</RouterLink>
          </div>
          <input type="submit" value="Se connecter" @click="authentification">
      </div>
    </div>
  </div>
</template>

<script setup>
  import "../assets/loginStyle.css";
  import CommunityIcon from '../components/icons/IconCommunity.vue'
  import { ref } from "vue";
  import { useAuthStore } from "@/stores/auth.store";

  const auth = useAuthStore()
  
  const email = ref()
  const password = ref()

  const authentification = async () => {
      await auth.login(email.value, password.value)
  }
</script>

