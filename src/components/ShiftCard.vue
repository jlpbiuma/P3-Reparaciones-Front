<script setup>
import API from '../services/api'
import { useAuthStore } from '../stores/authStore'
</script>

<template>
    <div id="cardContainer">
        <div id="employee">
            {{name}}
        </div>
        <div id="incomingTime">
            {{register.incomingTime}}
        </div>
        <div id="outcomingTime" v-if="register.outcomingTime != undefined">
            {{register.outcomingTime}}
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore(),
            name: ""
        }
    },
    props: ["register"],
    async created() {
        const response = await API.getInfoFromEmployeeID(this.register.employee,this.authStore.token)
        this.name = response.name;
    }
}
</script>

<style>
</style>