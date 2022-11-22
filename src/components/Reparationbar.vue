<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <nav id="reparationBar">
        <RouterLink to="/newRepair"><button>CREATE NEW Repair!</button></RouterLink>
        <RouterLink to="/unasignedRepairs">Unasigned Repairs</RouterLink>
        <RouterLink to="/asignedRepairs">Asigned Repairs</RouterLink>
        <RouterLink to="/doneRepairs">Done Repairs</RouterLink>
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