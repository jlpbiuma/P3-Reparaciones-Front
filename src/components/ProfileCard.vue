<script setup>
import EditUserProfile from './EditUserProfile.vue';
import {DialogWrapper, openDialog} from 'vue3-promise-dialog'
import Popup from './Popup.vue';
</script>

<template>
    <div id="containerProfile">
        <div id="name">
            {{profile.name}}
            <button @click="changeProfileInfo" id="nameButton">{{editProfileButtonMessage[0]}}name</button>
            <div v-if="showForm[0]">
                <EditUserProfile :index="index" @change-information="changeInformation"></EditUserProfile>
            </div>
        </div>
        <div id="rol">
            {{profile.rol}}
            <button @click="changeProfileInfo" id="rolButton">{{editProfileButtonMessage[1]}}rol</button>
            <div v-if="showForm[1]">
                <EditUserProfile :index="index" @change-information="changeInformation"></EditUserProfile>
            </div>
        </div>
        <div id="dni">
            {{profile.dni}}
            <button @click="changeProfileInfo" id="dniButton">{{editProfileButtonMessage[2]}}dni</button>
            <div v-if="showForm[2]">
                <EditUserProfile :index="index" @change-information="changeInformation"></EditUserProfile>
            </div>
        </div>
        <div id="email">
            {{profile.email}}
            <button @click="changeProfileInfo" id="emailButton">{{editProfileButtonMessage[3]}}email</button>
            <div v-if="showForm[3]">
                <EditUserProfile :index="index" @change-information="changeInformation"></EditUserProfile>
            </div>
        </div>
        <div id="phone">
            {{profile.phone}}
            <button @click="changeProfileInfo" id="phoneButton">{{editProfileButtonMessage[4]}}phone</button>
            <div v-if="showForm[4]">
                <EditUserProfile :index="index" @change-information="changeInformation"></EditUserProfile>
            </div>
        </div>
        <button @click="deleteProfile">Delete profile</button>
        <Popup v-if="showDelete" @close-popup="respuestaPopUp">

        </Popup>
    </div>
</template>

<script>
export default {
    data () {
        return {
            editProfileButtonMessage: ["Change my ","Change my ","Change my ","Change my ","Change my "],
            showForm: [false, false, false, false, false, false],
            index: 0,
            showDelete: false
        }
    },
    props: ["profile"],
    methods : {
        async changeProfileInfo(e) {
            switch (e.target.id){
                case "nameButton":
                    this.index = 0
                    break;
                case "rolButton":
                    this.index = 1
                    break;
                case "dniButton":
                    this.index = 2
                    break;
                case "emailButton":
                    this.index = 3
                    break;
                case "phoneButton":
                    this.index = 4
                    break;
            }
            if (!this.showForm[this.index]) {
                this.editProfileButtonMessage[this.index] = "Cancell change my "
            }
            else {
                this.editProfileButtonMessage[this.index] = "Change my "
            }
            this.showForm[this.index] = !this.showForm[this.index]
        },
        async changeInformation(modifiedInfo, idx) {
            this.showForm[idx] = !this.showForm[idx]
            switch (idx) {
                case 0:
                    this.profile.name = modifiedInfo;
                    break;
                case 1:
                    this.profile.rol = modifiedInfo;
                    break;
                case 2:
                    this.profile.dni = modifiedInfo;
                    break;
                case 3:
                    this.profile.email = modifiedInfo;
                    break;
                case 4:
                    this.profile.phone = modifiedInfo;
                    break;
            }
        },
        async deleteProfile() {
            this.showDelete = !this.showDelete
        },
        async respuestaPopUp(borrado) {
            this.showDelete = !this.showDelete
            if(borrado) {
                this.$emit("home")
            }
        }
    }
}
</script>

<style>

</style>