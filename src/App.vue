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
    <div>ABCDEF</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
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
  background-color: aqua;
  margin: 100px;
}
#footer {
  background-color: red;
}
</style>
