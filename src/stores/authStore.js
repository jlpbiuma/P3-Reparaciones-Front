import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token', null), // CONECTAR CON LOCALSTORAGE
      email: useStorage('email', null),
      id: useStorage('id', null)
    }
  },
  getters: {
    isLoggedIn() {
      return this.token != null
    },
    userEmail() {
      return this.email
    },
    userId() {
      return this.id
    }
  },
  actions: {
    logout() {
      this.token = null
      this.email = null
      this.id = null
    },
    login(token, email, id) {
      this.token = token
      this.email = email
      this.id = id
    }
  }
})
