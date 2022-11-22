<script setup>
import {RouterView} from 'vue-router'
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
      repairHistory: []
    }
  },
  async created() {
      const {data} = await API.getHistoryRepair();
      this.repairHistory = data;
  },
  components: {
    RepairList
  }
}
</script>
  