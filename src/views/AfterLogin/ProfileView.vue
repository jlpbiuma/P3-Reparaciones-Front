<script setup>
import API from '../../services/api'
import { useAuthStore } from '../../stores/authStore'
import ProfileCard from '../../components/ProfileCard.vue'
</script>

<template>
    <ProfileCard :profile="profile" @home="home"></ProfileCard>
</template>

<script>
export default {
    data() {
        return {
            authStore: useAuthStore(),
            profile: {}
        }
    },
    async created() {
        const response = await API.getUserProfile(this.authStore.userId, this.authStore.token)
        this.profile = response;
    },
    methods: {
        home() {
            this.authStore.logout()
            this.$router.push({name: 'home'});
        }
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
