import { defineStore } from 'pinia'
import { iSomesoApi } from '@/services/API.service'
import { getAvatar } from '@/services/avatar.service'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    me: {
      _id: '',
      name: '',
      email: '',
      avatar: {
        type: 'jpg',
        base64: ''
      }
    },
    token: '',
    errorMessage: ''
  }),

  actions: {
    async init() {
      const token = localStorage.getItem('token')

      if (token) {
        await iSomesoApi
          .get('/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(async (response) => {
            if (response.data.user) {
              this.me._id = response.data.user._id
              this.me.name = response.data.user.name
              this.me.email = response.data.user.email
              this.me.avatar = await getAvatar(this.me._id)
              this.token = response.data.token
              this.errorMessage = ''
            }
          })
          .catch((error) => {
            this.errorMessage = error.response.data.error
            console.log(this.errorMessage)
          })
      }
      this.redirect()
    },
    redirect() {
      if (this.me.name) return router.push({ name: 'home' })
      router.push({ name: 'login' })
    },

    async login(email, password) {
      await iSomesoApi
        .post('/users/login', {
          email: email,
          password: password
        })
        .then(async (response) => {
          if (response.data.user) {
            this.me._id = response.data.user._id
            this.me.name = response.data.user.name
            this.me.email = response.data.user.email
            this.me.avatar = await getAvatar(this.me._id)
            this.token = response.data.token
            this.errorMessage = ''
            localStorage.setItem('token', this.token)
            this.redirect()
          }
        })
        .catch((error) => {
          this.errorMessage = error.response.data.error
        })
    }
  }
})
