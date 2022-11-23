<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'
import API from '../../services/api'
import ReparationBar from '../../components/Reparationbar.vue'
import RepairList from '../../components/RepairList.vue';
</script>

<template>
    <ReparationBar></ReparationBar>
    <RouterView />
    <RepairList :repairs="repairs"></RepairList>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore(),
            repairs : []
        }
    },
    async created () {
        if (this.authStore.rol != "client")
        {
            debugger;
            this.repairs = await API.getAllUnasignedRepairs(this.authStore.token)
        }
        else
        {
            this.repairs = await API.getAllUnasignedRepairsByClientId(this.authStore.id, this.authStore.token)
        }
    },
    components: {
        RepairList
    }
}
</script>