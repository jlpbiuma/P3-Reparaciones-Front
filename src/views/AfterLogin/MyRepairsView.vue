<script setup>
// PONER EN SETUP SIEMPRE LO QUE SE VAYA A IMPORTAR
import ReparationBar from '../../components/Reparationbar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <ReparationBar></ReparationBar>
  <RouterView/>
</template>

<script>
import API from '../../services/api'
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
