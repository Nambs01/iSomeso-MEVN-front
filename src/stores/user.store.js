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
        },
        actif: false
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
              user.actif = false
            })
            const compare = (a, b) => {
              if (a.name < b.name) return 1
              return -1
            }
            this.users.sort(compare)
          })
          .catch((error) => {
            this.errorMessage = error.response.data.error
          })
      }
    },

    async updateOnlineUsers(onlineUsers) {
      this.users.map(async (user) => {
        user.actif = await onlineUsers.some((userOnline) => user._id === userOnline.userId)
      })
      const compare = (a, b) => {
        if (a.actif > b.actif) return 1
        return -1
      }
      this.users.sort(compare)
    }
  },

  getters: {
    getUsersByName: (state) => {
      return (name) =>
        state.users.filter((user) => {
          return user.name.toLowerCase().includes(name.toLowerCase())
        })
    },

    getUsersById: (state) => {
      return (id) =>
        state.users.find((user) => {
          return user._id == id
        })
    }
  }
})
