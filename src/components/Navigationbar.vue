<template>
    <nav v-if="!token" id="navigationBar">
        <h3><RouterLink to="/">JVJ-REPAIRS</RouterLink></h3>
        <RouterLink to="/login">LOGIN</RouterLink>
        <RouterLink to="/signup">SIGNUP</RouterLink>
        <RouterLink to="/myrepairs">MY REPAIRS</RouterLink>
        <RouterView/>  
    </nav>
    <nav v-else>
        Welcome {{email}} -
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
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