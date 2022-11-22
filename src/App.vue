<script setup>
// IMPORTAR AQUÍ TODOS LOS COMPONENTES QUE QUEREMOS FIJOS!!!
import Navigationbar from './components/Navigationbar.vue';
import {RouterView} from 'vue-router'
</script>

<template>
  <header id="header">
    <Navigationbar></Navigationbar>
  </header>
  <div id="main-view">
    <RouterView />
  </div>
  <footer id="footer">
    {{token}}
    <div>ABCDEF</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token")
    }
  }
}
</script>

<style scoped lang="scss">

#header {
  h3,nav {
    display: inline-block;
    margin-right: 40px;
  }
}
#main-view {
  background-color: rgb(245, 245, 245);
  padding: 100px;
}
#footer {
  background-color: rgb(32, 32, 32);
  color: white;
}
</style>
