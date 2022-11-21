<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <nav id="reparationBar">
        <RouterLink to="/historyrepair">New Repair</RouterLink>
        <RouterLink to="/myrepairs">Pending</RouterLink>
        <RouterLink to="/pending">History</RouterLink>
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