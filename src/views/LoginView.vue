<template>
  <div class="login">
    <div class="box">
      <div class="form">
          <h2>Se connecter</h2>
          <div class="inputbox">
              <input type="text" v-model="email" required>
              <span>Adresse email</span>
              <i></i>
          </div>
          <div class="inputbox">
              <input type="password" v-model="password" required>
              <span>Mots de passe</span>
              <i></i>
          </div>
          <div class="links">
              <a href="#">Mots de passe oublie?</a>
              <a href="#">Inscription</a>
          </div>
          <input type="submit" value="Valider" @click="authentification">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import "../assets/loginStyle.css";
  import { useAuthStore } from "@/stores/auth.store";

  const email = ref()
  const password = ref()
  const auth = useAuthStore()

  const authentification = () => {
    auth.login(email.value, password.value)
  }

  
</script>

