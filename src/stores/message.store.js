import { iSomesoApi } from '@/services/API.service'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth.store'
import { useDiscussionStore } from './discussion.store'

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: [
      {
        _id: '',
        to: '',
        from: '',
        text: '',
        vue: '',
        createdAt: ''
      }
    ],
    errorMessage: ''
  }),

  actions: {
    async getMessages(id) {
      const token = localStorage.getItem('token')

      if (token) {
        await iSomesoApi
          .get(`/messages/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            this.messages = response.data.messages
          })
          .catch((error) => {
            this.errorMessage = error.response.data.error
          })
      }
    },
    async sendMessage(to, text) {
      const token = localStorage.getItem('token')

      if (token) {
        await iSomesoApi
          .post(
            '/messages',
            {
              from: useAuthStore().me._id,
              to: to,
              text: text
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
          .then((response) => {
            this.messages.push(response.data.message)
            useDiscussionStore().getLastMessages()
          })
      }
    }
  }
})
