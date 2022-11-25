<script setup>
import EditUserProfile from './EditUserProfile.vue';
import {DialogWrapper, openDialog} from 'vue3-promise-dialog'
import Popup from './Popup.vue';
</script>

<template>

    <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="row container d-flex justify-content-center">
                <div class="col-xl-6 col-md-12">
                    <div class="card user-card-full">
                        <div class="row m-l-0 m-r-0">
                            <div class="col-sm-4 bg-c-lite-green user-profile">
                                <div class="card-block text-center text-white">
                                    <div class="m-b-25">
                                        <img src="../../images/profile.png" class="img-radius" style="width:10vw;"
                                            alt="User-Profile-Image">
                                    </div>
                                    <h6 class="f-w-600" id="name">{{ profile.name }}</h6>
                                    <button @click="changeProfileInfo"
                                        id="nameButton">{{ editProfileButtonMessage[0] }}name</button>
                                    <div v-if="showForm[0]">
                                        <EditUserProfile :index="index" @change-information="changeInformation">
                                        </EditUserProfile>
                                    </div>
                                    <p>{{ profile.rol }}</p>
                                    <button @click="changeProfileInfo"
                                        id="rolButton">{{ editProfileButtonMessage[1] }}rol</button>
                                    <div v-if="showForm[1]">
                                        <EditUserProfile :index="index" @change-information="changeInformation">
                                        </EditUserProfile>
                                    </div>
                                    <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="card-block">
                                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Email</p>
                                            <h6 class="text-muted f-w-400"> {{ profile.email }}</h6>
                                            <button @click="changeProfileInfo"
                                                id="emailButton">{{ editProfileButtonMessage[3] }}email</button>
                                            <div v-if="showForm[3]">
                                                <EditUserProfile :index="index" @change-information="changeInformation">
                                                </EditUserProfile>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Phone</p>
                                            <h6 class="text-muted f-w-400">{{ profile.phone }}</h6>
                                            <button @click="changeProfileInfo"
                                                id="phoneButton">{{ editProfileButtonMessage[4] }}phone</button>
                                            <div v-if="showForm[4]">
                                                <EditUserProfile :index="index" @change-information="changeInformation">
                                                </EditUserProfile>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">ID</p>
                                        <h6 class="text-muted f-w-400"> {{ profile.dni }}</h6>
                                        <button @click="changeProfileInfo"
                                            id="dniButton">{{ editProfileButtonMessage[2] }}dni</button>
                                        <div v-if="showForm[2]">
                                            <EditUserProfile :index="index" @change-information="changeInformation">
                                            </EditUserProfile>
                                        </div>
                                    </div>
                                    <button @click="deleteProfile">Delete profile</button>
                                    <Popup v-if="showDelete" @close-popup="respuestaPopUp">

                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
</template>

<script>
export default {
    data() {
        return {
            editProfileButtonMessage: ["Change my ", "Change my ", "Change my ", "Change my ", "Change my "],
            showForm: [false, false, false, false, false, false],
            index: 0,
            showDelete: false
        }
    },
    props: ["profile"],
    methods: {
        async changeProfileInfo(e) {
            switch (e.target.id) {
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
            debugger;
            this.showDelete = !this.showDelete
            if (borrado) {
                this.$emit("home")
            }
        }
    }
} 
</script>

<style scoped>
button{
    height:30px;
    border-radius: 5px;
    background-color: #ff804500;
    border-color:#ff804500;
    color:#7e7e7e;
    font-size:smaller;
}
#name {
    font-size: larger;
}

.padding {
    padding: 3rem;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    border: none;
    margin-bottom: 30px;
}

.m-r-0 {
    margin-right: 0px;
}

.m-l-0 {
    margin-left: 0px;
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px;
}

.bg-c-lite-green {
    background: -webkit-gradient(linear, left top, right top, from(#f29263), to(#ee5a6f));
    background: linear-gradient(to right, #ff8045, #ffe868);
}

.user-profile {
    padding: 20px 0;
}

.card-block {
    padding: 1.25rem;
}

.m-b-25 {
    margin-bottom: 25px;
}

.img-radius {
    border-radius: 5px;
}



h6 {
    font-size: 14px;
}

.card .card-block p {
    line-height: 25px;
}

@media only screen and (min-width: 1400px) {
    p {
        font-size: 14px;
    }
}

.card-block {
    padding: 1.25rem;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
    margin-bottom: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.card .card-block p {
    line-height: 25px;
}

.m-b-10 {
    margin-bottom: 10px;
}

.text-muted {
    color: #919aa3 !important;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-20 {
    margin-bottom: 20px;
}

.m-t-40 {
    margin-top: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-40 {
    margin-top: 20px;
}

.user-card-full .social-link li {
    display: inline-block;
}

.user-card-full .social-link li a {
    font-size: 20px;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
</style>