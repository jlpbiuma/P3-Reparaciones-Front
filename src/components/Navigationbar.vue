<template>
    <nav v-if="!token" id="navigationBar">
        <h3><RouterLink to="/">JVJ-REPAIRS</RouterLink></h3>
        <RouterLink to="/myrepairs">My repairs</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/signup"><button>Get started</button></RouterLink>
        <RouterLink to="/login"><button>Login</button></RouterLink>
        <RouterLink to="/profile"><button>Profile</button></RouterLink>
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