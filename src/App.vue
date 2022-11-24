<script setup>
// IMPORTAR AQUÍ TODOS LOS COMPONENTES QUE QUEREMOS FIJOS!!!
import Navigationbar from './components/Navigationbar.vue';
import { RouterView } from 'vue-router'
import Footer from './components/FooterBar.vue'
</script>

<template>
  <body>
  <div class="screen">
    <header id="header" >
      <Navigationbar></Navigationbar>
    </header>
    <div id="main-view" >
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
  </body>
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
body, html{
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color:rgb(245, 245, 245);
}
.screen {
  overflow-x: hidden;
  overflow-y: auto;

}
#main-view {
  background-color: rgb(245, 245, 245);
  padding: 100px;
  
}

Footer {
  background-color: rgb(32, 32, 32);
  color: white;

}


</style>
