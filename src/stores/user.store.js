import { iSomesoApi } from '@/services/API.service'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth.store'
import { getAvatar } from '@/services/avatar.service'

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
      const auth = useAuthStore()

      await iSomesoApi
        .post('/users', user)
        .then(async () => {
          await auth.login(user.email, user.password)
          this.errorMessage = ''
        })
        .catch((error) => (this.errorMessage = error.response.data.error))
    },

    async getAllUsers() {
      const token = localStorage.getItem('token')

      if (token) {
        await iSomesoApi
          .get('/users', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            this.users = response.data.users
            this.users.forEach(async (user) => {
              user.avatar = await getAvatar(user._id)
            })
          })
          .catch((error) => {
            this.errorMessage = error.response.data.error
          })
      }
    }
  },

  getters: {
    getUsersByName(name) {
      return this.users.filter((user) => {
        return user.name.includes(name)
      })
    },

    getUsersById(id) {
      return this.users.filter((user) => {
        return user._id == id
      })
    }
  }
})
