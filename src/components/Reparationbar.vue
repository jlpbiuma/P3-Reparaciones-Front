<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <nav id="reparationBar">
        <RouterLink to="/myrepairs"><button type="button" class="btn btn-outline-primary">Repairs</button></RouterLink>
        <RouterLink to="/pending"><button type="button" class="btn btn-outline-primary">Pending</button></RouterLink>
        <RouterLink to="/historyrepair"><button type="button" class="btn btn-outline-primary">History</button></RouterLink>
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