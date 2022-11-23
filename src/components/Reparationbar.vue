<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <nav id="reparationBar">
        <RouterLink to="/newRepair"><button>CREATE NEW Repair!</button></RouterLink>
        <RouterLink to="/unasignedRepairs"><button type="button" class="btn btn-outline-primary">Repairs</button></RouterLink>
        <RouterLink to="/asignedRepairs"><button type="button" class="btn btn-outline-primary">Pending</button></RouterLink>
        <RouterLink to="/doneRepairs"><button type="button" class="btn btn-outline-primary">History</button></RouterLink>
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