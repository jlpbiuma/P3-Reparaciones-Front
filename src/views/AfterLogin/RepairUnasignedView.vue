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
        const repairsResponse = await API.getHistoryRepair(this.authStore.id, this.authStore.token)
        // CHANGE AXIOS GET IN BACKEND
        this.repairs = repairsResponse.filter(repair => Object.keys(repair).length <= 7)
    },
    components: {
        RepairList
    }
}
</script>