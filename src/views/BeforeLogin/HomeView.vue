<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <h1>WELCOME TO JVJ-REPAIRS!</h1>
    <h2>We solve problems</h2>
    <RouterLink to="/signup"><button>GET STARTED!</button></RouterLink>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
.form {
    background-color: rgb(181, 229, 255);
    padding: 15px;

    label {
        display: block;
        padding: 5px;
        margin-top: 10px;
    }
}
</style>
