<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <nav id="reparationBar">
        <RouterLink to="/newRepair"><button>CREATE NEW Repair!</button></RouterLink>
        <RouterLink to="/unasignedRepairs">New Repair</RouterLink>
        <RouterLink to="/pendingRepairs">Pending</RouterLink>
        <RouterLink to="/doneRepairs">History</RouterLink>
    </nav>
</template>




<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style>
#reparationBar {
    display: flex;
    justify-content: space-around;
}
</style> 