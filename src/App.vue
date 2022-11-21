<script setup>
// IMPORTAR AQUÍ TODOS LOS COMPONENTES QUE QUEREMOS FIJOS!!!
import Navigationbar from './components/Navigationbar.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <Navigationbar></Navigationbar>
  </header>
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
