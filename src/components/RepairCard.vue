<script setup>
import API from '../services/api'
import { useAuthStore } from '../stores/authStore'
</script>

<template>
    <div>
        DISPOSITIVO: {{repair.device}}
    </div>
    <div>
        PROBLEMA: {{repair.issue}}
    </div>
    <div>
        AUTODIAGNÓSTICO: {{repair.selfdiagnosis}}
    </div>
    <div>
        CLIENT: {{repair.client}}
    </div>
    <div>
        <button @click="deleteRepair">DELETE THIS ONE!</button>
    </div>
    <div v-if="authStore.repairViewState == 'unasignedRepairs'">
        UNASIGNED!
    </div>
    <div v-if="authStore.repairViewState == 'asignedRepairs'">
        ASIGNED!!!
    </div>
    <div v-if="authStore.repairViewState == 'doneRepairs'">
        DONE!!!
    </div>
    <div>
        {{authStore.repairViewState}}
    </div>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore()
        }
    },
    props: ['repair'],
    methods: {
        async deleteRepair() {
            const response = await API.deleteRepair(this.repair._id, this.authStore.token)
            console.log("Objeto eleminado: ", response);
        }
    }
}
</script>

<style>
</style>