<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
</script>

<template>
    <nav id="reparationBar">
        <RouterLink to="/newRepair"><button>CREATE NEW Repair!</button></RouterLink>
        <RouterLink to="/unasignedRepairs" v-if="authStore.repairViewState == 'unasignedRepairs'" class="selected">
            <button type="button" class="btn">Repairs</button>
        </RouterLink>
        <RouterLink to="/unasignedRepairs" v-else>
            <button type="button" class="btn btn-outline-primary">Repairs</button>
        </RouterLink>
        <RouterLink to="/asignedRepairs" v-if="authStore.repairViewState == 'asignedRepairs'" class="selected">
            <button type="button" class="btn">Pending</button>
        </RouterLink>
        <RouterLink to="/asignedRepairs" v-else>
            <button type="button" class="btn btn-outline-primary">Pending</button>
        </RouterLink>
        <RouterLink to="/doneRepairs" v-if="authStore.repairViewState == 'doneRepairs'" class="selected">
            <button type="button" class="btn">History</button>
        </RouterLink>
        <RouterLink to="/doneRepairs" v-else>
            <button type="button" class="btn btn-outline-primary">History</button>
        </RouterLink>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            authStore: useAuthStore()
        }
    }
}
</script>

<style>
#reparationBar {
    display: flex;
    justify-content: space-around;
}
.selected {
    background-color: #0d6efd;
   
    border-radius: 8px;
}

</style> 