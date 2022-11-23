<script setup>
import {RouterView} from 'vue-router'
import API from '../../services/api'
import ReparationBar from '../../components/Reparationbar.vue'
import RepairCardVue from '../../components/RepairCard.vue';
</script>

<template>
  <ReparationBar></ReparationBar>
  <RouterView/>
  <RepairCardVue/>
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