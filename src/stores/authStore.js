import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token', null), // CONECTAR CON LOCALSTORAGE
      email: useStorage('email', null),
      id: useStorage('id', null),
      rol: useStorage('rol', null),
      repairViewState: useStorage('repairState', null)
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
    },
    userRol() {
      return this.rol
    },
    isAdmin() {
      return this.rol === "admin"
    }
  },
  actions: {
    logout() {
      this.token = null
      this.email = null
      this.id = null
      this.rol = null
    },
    login(token, email, id, rol) {
      this.token = token
      this.email = email
      this.id = id
      this.rol = rol
    }
  }
})
