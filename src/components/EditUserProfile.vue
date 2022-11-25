<script setup>
import API from '../services/api'
import { useAuthStore } from '../stores/authStore'
</script>

<template>
    <input type="text" v-model="modifiedInfo">
    <button @click="acceptChanges">Aceptar cambios</button>
</template>

<script>
export default {
    data() {
        return {
            authStore: useAuthStore()
        }
    },
    props: ["index"],
    methods: {
        async acceptChanges() {
            let response;
            switch (this.index) {
                case 0:
                    response = await API.putUserProfile(this.authStore.id,{name:this.modifiedInfo}, this.authStore.token)
                    this.$emit("change-information", this.modifiedInfo, this.index)
                    break;
                case 1:
                    response = await API.putUserProfile(this.authStore.id,{rol:this.modifiedInfo}, this.authStore.token)
                    this.$emit("change-information", this.modifiedInfo, this.index)
                    break;
                case 2:
                    response = await API.putUserProfile(this.authStore.id,{dni:this.modifiedInfo}, this.authStore.token)
                    this.$emit("change-information", this.modifiedInfo, this.index)
                    break;
                case 3:
                    response = await API.putUserProfile(this.authStore.id,{email:this.modifiedInfo}, this.authStore.token)
                    this.$emit("change-information", this.modifiedInfo, this.index)
                    break;
                case 4:
                    response = await API.putUserProfile(this.authStore.id,{phone:this.modifiedInfo}, this.authStore.token)
                    this.$emit("change-information", this.modifiedInfo, this.index)
                    break;
            }
        }
    }
}
</script>

<style>
button{
    height:30px;
    border-radius: 5px;
    background-color: #ff804500;
    border-color:#ff804500;
    color:#7e7e7e;
    font-size:smaller;
}
</style>