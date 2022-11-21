<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <nav id="navigationBar">
        <RouterLink to="/">JVJ-REPAIRS</RouterLink>
        <RouterLink to="/myrepairs">My repairs</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/signup"><button>Get started</button></RouterLink>
        <RouterLink to="/login" ><button>Login</button></RouterLink>
        <RouterLink to="/profile"><button>Profile</button></RouterLink>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        logout() {
            console.log("Clean")
            localStorage.clear();
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style>
#navigationBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>