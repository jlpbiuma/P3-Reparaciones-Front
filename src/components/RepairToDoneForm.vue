<script setup>
import API from '../services/api'
import { useAuthStore } from '../stores/authStore'
</script>

<template>
    <div>
        <label for="">
            INTRODUZCA EL DIAGNÓSTICO:
            <input type="text" v-model="techDiagnosis">
        </label>
        <label for="">
            INTRODUZCA LA FECHA DE RECOGIDA:
            <input type="text" v-model="pickUpDate">
        </label>
        <label for="">
            INTRODUZCA EL PRECIO DE LA REPARACIÓN:
            <input type="text" v-model="price">
        </label>
        <button @click="putDone">SUBMIT!</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore()
        }
    },
    props: ["repair"],
    methods: {
        async putDone() {
            this.repair.techDiagnosis = this.techDiagnosis
            this.repair.pickUpDate = this.pickUpDate
            this.repair.price = this.price
            console.log(this.repair._id)
            const response = await API.putRepairToDone(this.repair._id,this.authStore.token,this.repair)
        }
    }
}
</script>

<style>

</style>