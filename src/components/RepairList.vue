<script setup>
import RepairCard from './RepairCard.vue'
</script>

<template>
    <div>ESTE ES EL COMPONENTE LISTA:</div>
    <RepairCard v-for="(repair,index) in repairHistory" :key="index" :repair="repair"></RepairCard>
</template>


<script>
export default {
    data() {
        return {
        }
    },
    props: ["repairHistory"],
    components: {
        RepairCard
    }
}
</script>

<style>
</style>