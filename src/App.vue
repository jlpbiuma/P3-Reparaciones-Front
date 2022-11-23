<script setup>
// IMPORTAR AQUÍ TODOS LOS COMPONENTES QUE QUEREMOS FIJOS!!!
import Navigationbar from './components/Navigationbar.vue';
import { RouterView } from 'vue-router'
import Footer from './components/FooterBar.vue'
</script>

<template>
  <div class="screen">
    <header id="header">
      <Navigationbar></Navigationbar>
    </header>

    <div id="main-view">

      <RouterView />

    </div>
    <div id="seetoken">{{ token }}ABCDEF</div>


    <Footer></Footer>
  </div>
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

#seetoken {
  background-color: black;
  color: white;
}
</style>
