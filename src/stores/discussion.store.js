import { defineStore } from 'pinia'
import { iSomesoApi } from '@/services/API.service'
import { getAvatar } from '@/services/avatar.service'

export const useDiscussionStore = defineStore('discussion', {
  state: () => ({
    discussions: [
      {
        _id: '',
        to: {
          _id: '',
          name: '',
          avatar: {
            type: 'jpg',
            base64: ''
          }
        },
        from: {
          _id: '',
          name: '',
          avatar: {
            type: 'jpg',
            base64: ''
          }
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
            this.discussions = response.data.messages
            this.discussions.forEach(async (discussion) => {
              discussion.to.avatar = await getAvatar(discussion.to._id)
              discussion.from.avatar = await getAvatar(discussion.from._id)
            })
          })
      }
    }
  }
})
