<script setup>
import RepairCard from './RepairCard.vue'
</script>

<template>
    <div>ESTE ES EL COMPONENTE LISTA:</div>
    <RepairCard v-for="(repair,index) in repairs" :key="index" :repair="repair"></RepairCard>
</template>


<script>
export default {
    data() {
        return {
        }
    },
    props: ["repairs"],
    components: {
        RepairCard
    }
}
</script>

<style>
</style>