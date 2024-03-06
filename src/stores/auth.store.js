import { defineStore } from "pinia";
import { chat_api } from "@/services/chatAPI.service";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      name: "",
      email: "",
      avatar: ""
    },
    token: "",
    errorMessage: ""
  }),

  actions: {
    async init(){
      const token = localStorage.getItem('token')

      if(token){
        await chat_api.get('/users/me', {
          headers: {
            'Authorization':  `Bearer ${token}`
          }
        }).then((response) => {
          if(response.data.user){
            this.user = response.data.user
            this.token = response.data.token
            this.errorMessage = ""     
          }
        }).catch((error) => {
        this.errorMessage = error.response.data.error
        })
      }
      this.redirect()  
    },
    redirect(){
      if(this.user.name)
        return router.push({ name: "home" })  
      router.push({ name: "login" })
    },
    
    async login(email, password) {
    await chat_api.post('/users/login', {
        email: email,
        password: password
      }).then((response) => {
        if (response.data.user) {
          this.user = response.data.user
          this.token = response.data.token
          this.errorMessage = ""
          localStorage.setItem('token', this.token)
          this.redirect()  
        }
      
      }).catch((error) => {
        this.errorMessage = error.response.data.error
      })
    }
  }
})