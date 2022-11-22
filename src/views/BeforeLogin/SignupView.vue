<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <main>
    <h1>SIGNUP</h1>
    <form class="form">
      <label>
        NAME
        <input type="text" v-model="newUser.name" />
      </label>

      <label>
        DNI
        <input type="text" v-model="newUser.dni"/>
      </label>

      <label>
        EMAIL
        <input type="email" v-model="newUser.email"/>
      </label>

      <label>
        PASSWORD
        <input type="password" v-model="newUser.password"/>
      </label>

      <label>
        PHONE NUMBER
        <input type="text" v-model="newUser.phone" />
      </label>

      <button @click.prevent="signupUser">SIGNUP</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        name: '',
        dni: '',
        email: '',
        password: '',
        phone: ''
      },
      authStore: useAuthStore()
    }
  },
  methods: {
    async signupUser() {
      const response = await API.signup(this.newUser)
      if (response.error) {
        alert('Error creating account')
      } else {
        const {token, email, id} = response
        this.authStore.login(token, email, id)        
        // DE ESTA FORMA CAMBIAMOS LA VISTA DE UN VIEW DESDE UN VIEW!!
        this.$router.push({name: 'myRepairs'})
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  padding: 15px;
  background-color: rgb(181, 229, 255);
  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
}
</style>
