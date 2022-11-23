<script setup>
import API from '../services/api'
import { useAuthStore } from '../stores/authStore'
import RepairAsignedFormToDoneView from './RepairToDoneForm.vue';
</script>

<template>
    <div v-if="!disable" class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header text-primary">Pending</div>
        <div class="card-body">
            <div>
                <h6 class="card-title">Device:</h6>
                {{ repair.device }}
            </div>
            <div>
                <h6 class="card-title">Issue:</h6>
                {{ repair.issue }}
            </div>
            <div>
                <h6 class="card-title">Self-Diagnosis:</h6>
                {{ repair.selfdiagnosis }}
            </div>
            <div>
                CLIENT: {{ repair.client }}
            </div>
            <div v-if="authStore.rol != 'technical' && authStore.repairViewState == 'unasignedRepairs'">
                <button @click="deleteRepair">DELETE THIS ONE!</button>
            </div>
            <div v-if="authStore.rol == 'technical' && authStore.repairViewState == 'unasignedRepairs'">
                <button @click="asignRepair">Asign repair for me!</button>
            </div>
            <div v-if="authStore.rol == 'technical' && authStore.repairViewState == 'asignedRepairs'">
                <button v-if="!form" @click="activateForm">Finish repair!</button>
                <button v-else @click="activateForm">Cancell finish repair!</button>
                <div v-if="form">
                    <RepairAsignedFormToDoneView :repair="repair"></RepairAsignedFormToDoneView>
                </div>
            </div>
        </div>

    </div>
    <!-- <div>
        DISPOSITIVO: {{repair.device}}
    </div>
    <div>
        PROBLEMA: {{repair.issue}}
    </div>
    < AUTODIAGNÓSTICO: {{repair.selfdiagnosis}}
    </div>
    <div>
        CLIENT: {{}}
    </div> -->
    <div>
        
    </div>

</template>

<script>
export default {
    data() {
        return {
            authStore: useAuthStore(),
            disable: false,
            form: false
        }
    },
    props: ['repair'],
    methods: {
        async deleteRepair() {
            this.disable = false;
            console.log(this.authStore.rol, this.authStore.repairViewState)
            const response = await API.deleteRepair(this.repair._id, this.authStore.token)
            console.log("Objeto eleminado: ", response);
        },
        async asignRepair() {
            console.log(this.repair._id)
            console.log(this.authStore.token)
            const response = await API.putAsignToEmployee(this.repair._id, this.authStore.id, this.authStore.token)
            console.log("Objeto asignado", response);
        },
        async activateForm() {
            this.form = !this.form;
        }
    }
}
</script>

<style>
.card {
    margin-top: 100px;
}

.repairs {
    background-color: green;
}

.pending {
    background-color: red;
}

.history {
    background-color: blue;
}
</style>