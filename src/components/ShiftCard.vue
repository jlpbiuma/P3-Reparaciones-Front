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
#cardContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    margin: 10px;
    padding: 10px;
}
</style>