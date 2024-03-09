import { defineStore } from 'pinia'
import { iSomesoApi } from '@/services/API.service'

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: [
      {
        _id: '',
        to: {
          _id: '',
          name: ''
        },
        from: {
          _id: '',
          name: ''
        },
        text: '',
        vue: '',
        createdAt: ''
      }
    ]
  }),

  actions: {
    async getLastMessages() {
      const token = localStorage.getItem('token')

      if (token) {
        await iSomesoApi
          .get('/messages', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            this.messages = response.data.messages
          })
      }
    }
  }
})
