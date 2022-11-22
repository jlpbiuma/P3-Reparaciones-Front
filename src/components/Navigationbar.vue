<script setup>
import {RouterLink} from 'vue-router'
import { useAuthStore } from '../stores/authStore'
</script>

<template>
    <nav id="navigationBar">
        <!-- COMMON MENU NAVITEMS -->
        <RouterLink to="/">JVJ-REPAIRS</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        
        <!-- LOGOUT NAVITEMS -->
        <div v-if="!authStore.isLoggedIn">
            <RouterLink to="/signup"><button>Get started</button></RouterLink>
            <RouterLink to="/login" ><button>Login</button></RouterLink>
        </div>
        
        <!-- LOGGED IN NAVITEMS -->
        <div v-else>
            <RouterLink to="/myrepairs">My repairs</RouterLink>
            <RouterLink to="/profile">
                <button>Profile</button>
                {{ authStore.userEmail }}
            </RouterLink>
            <button @click="logout">Logout</button>
        </div>
        
    </nav>
</template>

<script>
export default {
    data() {
        return {
            authStore: useAuthStore()
        }
    },
    methods: {
        logout() {
            this.authStore.logout()
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