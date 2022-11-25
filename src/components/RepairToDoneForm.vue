<script setup>
import API from '../services/api'
import { useAuthStore } from '../stores/authStore'
</script>

<template>
    <div v-if="!finish">
        <label for="">
            INTRODUZCA EL DIAGNÓSTICO:
            <input type="text" v-model="techDiagnosis">
        </label><br>
        <label for="">
            INTRODUZCA LA FECHA DE RECOGIDA: <br>
            <input type="text" v-model="pickupDateMinute" placeholder="minuto"><br>
            <input type="text" v-model="pickupDateHour" placeholder="hora"><br>
            <input type="text" v-model="pickupDateDay" placeholder="dia"><br>
            <input type="text" v-model="pickupDateMonth" placeholder="mes"><br>
            <input type="text" v-model="pickupDateYear" placeholder="año"><br>
        </label><br>
        <label for="">
            INTRODUZCA EL PRECIO DE LA REPARACIÓN:
            <input type="text" v-model="price">
        </label><br>
        <button @click="putDone">SUBMIT!</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore(),
            finish: false
        }
    },
    props: ["repair"],
    methods: {
        async putDone() {
            this.repair.techDiagnosis = this.techDiagnosis;
            this.repair.pickupDate =  this.pickupDateYear + "-" + this.pickupDateMonth + "-" + this.pickupDateDay + "T" + this.pickupDateHour + ":" + this.pickupDateMinute + ":00.000+00:00"
            this.repair.price = Number(this.price);
            const response = await API.putRepairToDone(this.repair._id,this.authStore.token,this.repair)
            this.finish = !this.finish
            this.$emit("finish")
        }
    }
}
</script>

<style>

</style>