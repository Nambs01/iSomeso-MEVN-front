import { chat_api } from "@/services/chatAPI.service";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth.store";

const auth = useAuthStore()

export const useUserStore = defineStore('user', {
  state: () => ({
    errorMessage: ""
  }),
  actions: {
    async createUser(user){
      await chat_api.post('/users', user)
        .then(() => {
          auth.login(user.email, user.password)
          this.errorMessage = ""
        })
        .catch((error) => this.errorMessage = error.response.data.error)
    }
  }
})