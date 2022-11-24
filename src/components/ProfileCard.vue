<script setup>
import EditUserProfile from './EditUserProfile.vue';
</script>

<template>
    <div id="containerProfile">
        <div id="name">
            {{profile.name}}
            <button @click="changeProfileInfo" id="nameButton">{{editProfileButtonMessage}}name</button>
            <div v-if="showForm[0]">
                <EditUserProfile ></EditUserProfile>
            </div>
        </div>
        <div id="rol">
            {{profile.rol}}
            <button @click="changeProfileInfo" id="rolButton">{{editProfileButtonMessage}}rol</button>
            <div v-if="showForm[1]">
                <EditUserProfile ></EditUserProfile>
            </div>
        </div>
        <div id="dni">
            {{profile.dni}}
            <button @click="changeProfileInfo" id="dniButton">{{editProfileButtonMessage}}dni</button>
            <div v-if="showForm[2]">
                <EditUserProfile ></EditUserProfile>
            </div>
        </div>
        <div id="email">
            {{profile.email}}
            <button @click="changeProfileInfo" id="emailButton">{{editProfileButtonMessage}}email</button>
            <div v-if="showForm[3]">
                <EditUserProfile ></EditUserProfile>
            </div>
        </div>
        <div id="phone">
            {{profile.phone}}
            <button @click="changeProfileInfo" id="phoneButton">{{editProfileButtonMessage}}phone</button>
            <div v-if="showForm[4]">
                <EditUserProfile ></EditUserProfile>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            editProfileButtonMessage: "Change my ",
            showForm: [false, false, false, false, false, false]
        }
    },
    props: ["profile"],
    methods : {
        async changeProfileInfo(e) {
            console.log(e.target.id)
            if (showForm) {
                showForm = !showForm
                editProfileButtonMessage = "Cancell change my "
            }
            else {
                showForm = !showForm
                editProfileButtonMessage = "Change my "
            }
        },
        async deleteProfile() {

        }
    }
}
</script>

<style>

</style>