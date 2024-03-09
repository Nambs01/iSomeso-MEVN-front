import { iSomesoApi } from '@/services/API.service'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth.store'

const auth = useAuthStore()

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [
      {
        _id: '',
        name: '',
        email: '',
        avatar: {
          base64: '',
          type: ''
        }
      }
    ],
    errorMessage: ''
  }),
  actions: {
    async createUser(user) {
      await iSomesoApi
        .post('/users', user)
        .then(() => {
          auth.login(user.email, user.password)
          this.errorMessage = ''
        })
        .catch((error) => (this.errorMessage = error.response.data.error))
    }
  }
})
