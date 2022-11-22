<script setup>
import {RouterView} from 'vue-router'
import { useAuthStore } from '../../stores/authStore'
import API from '../../services/api'
import ReparationBar from '../../components/Reparationbar.vue'
import RepairList from '../../components/RepairList.vue';
</script>

<template>
  <ReparationBar></ReparationBar>
  <RouterView/>
  <RepairList :repairHistory="repairHistory"></RepairList>
</template>

<script>
export default {
  data() {
    return {
      repairHistory: [],
      authStore: useAuthStore()
    }
  },
  async created() {
    const data = await API.getHistoryRepair(this.authStore.id, this.authStore.token);
    this.repairHistory = data.filter();
  },
  components: {
    RepairList
  }
}
</script>
  