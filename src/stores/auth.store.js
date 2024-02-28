import { defineStore } from "pinia";
import { chat_api } from "@/services/chatAPI.service";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: ""
  }),

  actions: {
    init(){
      const token = localStorage.getItem('token')
      if(token){
        chat_api.get('/users/me', {
          'headers': {
            Authorization: token
          }
        }).then((response) => {
          this.user = response.data.user
          this.token = response.data.token
          this.redirect()
        })
      }
      
    },
    redirect(){
      if(this.user)
        router.push({ name: "home" })
      router.push({ name: "login" })
    },
    login(email, password) {
      chat_api.post('/users/login', {
        email: email,
        password: password
      }).then((response) => {
        this.user = response.data.user
        this.token = response.data.token
        localStorage.setItem('token', this.token)
        this.redirect()
      })
    }
  }
})