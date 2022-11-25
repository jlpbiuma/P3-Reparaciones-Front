<script setup>
import API from '../services/api.js'
import { useAuthStore } from '../stores/authStore'
import ShiftCard from './ShiftCard.vue';
</script>

<template>
    <div id="list">
        <ShiftCard v-for="(register, idx) in registers" :register="register" :key="idx" @update="update"></ShiftCard>
        <div><button @click="update">Update!</button></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore(),
            registers: []
        }
    },
    async created() {   
        const response = await API.getAllRegisters(this.authStore.token)
        this.registers = response;
    },
    methods: {
        async update() {
            const response = await API.getAllRegisters(this.authStore.token)
            this.registers = response;
        }
    }
}
</script>

<style>
</style>