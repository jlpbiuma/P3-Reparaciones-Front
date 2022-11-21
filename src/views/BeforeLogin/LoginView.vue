<script setup>
import API from '../../services/api.js'
</script>

<template>
  <main>
    <h1>LOGIN</h1>

    <form class="form">
      <label>
        EMAIL
        <input type="email" v-model="newUser.email"/>
      </label>

      <label>
        PASSWORD
        <input type="password" v-model="newUser.password" />
      </label>

      <button @click.prevent="loginUser">LOGIN</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async loginUser() {
      const response = await API.login(this.newUser)
      if (response.error) {
        alert('wrong username/password')
      } else {
        this.$router.push('myRepairs');
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  background-color: rgb(181, 229, 255);
  padding: 15px;
  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
}
</style>
