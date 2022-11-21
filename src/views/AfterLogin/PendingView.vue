<script setup>
import { RouterLink, RouterView } from 'vue-router'
import API from '../../services/api'
import ReparationBar from '../../components/Reparationbar.vue'
</script>

<template>
  <ReparationBar></ReparationBar>
  <RouterView/>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>