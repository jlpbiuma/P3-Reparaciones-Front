<script setup>
// PONER EN SETUP SIEMPRE LO QUE SE VAYA A IMPORTAR
import ReparationBar from '../../components/Reparationbar.vue'
import {RouterView} from 'vue-router'
import API from '../../services/api'
import RepairList from '../../components/RepairList.vue'
</script>

<template>
  <ReparationBar></ReparationBar>
  <RouterLink to="/newrepair"><button type="button" class="btn btn-primary btn-sm">Create New Repair</button></RouterLink>
  <RouterView/>
</template>

<script>
export default {
  data() {
    return {
      repairHistory: []
    }
  },
  methods: {
    getMyRepairs: async function() {
      const {data} = await API.get(this.repairs)
      if (data === []) {
        return "Oops, you don't have any Repairs"
      } else {
        this.repairHistory = data.filter(individualRepair => individualRepair.technician == "")
      }
    }
  },
  components: {
    RepairList
  }
}
</script>

<style scoped>

.btn{
  margin-top: 80px;
}


</style>
