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
        if (this.authStore.rol == "admin")
        {
            this.repairs = await API.getAllDoneRepairs(this.authStore.token)
        }
        else
        {
            this.repairs = await API.getAllDoneRepairsByUserId(this.authStore.id, this.authStore.token)
        }
    },
    components: {
        RepairList
    }
}
</script>

<Style>

</Style>