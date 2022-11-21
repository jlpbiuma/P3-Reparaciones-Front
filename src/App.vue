<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
      <h3>JVJ-REPAIRS</h3>
      <nav v-if="!token">
        <RouterLink to="/">Login</RouterLink> |
        <RouterLink to="/signup">Signup</RouterLink>
      </nav>
      <nav v-else>
        Welcome {{ email}} -
        <button @click="logout">Logout</button>
      </nav>
  </header>
  <RouterView />
</template>

<script>
const token = localStorage.getItem('token')
const email = localStorage.getItem('email')

export default {
  data() {
    return {
      token
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  h3,nav {
    display: inline-block;
    margin-right: 40px;
  }
}
</style>
