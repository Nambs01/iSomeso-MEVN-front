import { defineStore } from "pinia";
import { chat_api } from "@/services/chatAPI.service";

export const useMessageStore = defineStore("message", {
  state: () => ({
    messages: Array({
      _id: "",
      to: "",
      from: "",
      text: "",
      vue: "",
      createdAt: ""
    })
  }),

  actions: {
    async getLastMessages(){
      const token = localStorage.getItem('token') 
      
      if(token){
        await chat_api.get('/messages', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((response) => {
          this.messages = response.data.messages
          console.log(this.messages)
        })
      }
    }
  }
})