<script setup>
import API from '../services/api'
import { useAuthStore } from '../stores/authStore'
import RepairAsignedFormToDoneView from './RepairToDoneForm.vue';
</script>

<template>
    <div v-if="!disable" class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header text-dark">Pending</div>
        <div class="card-body">
            <div>
                <h6 class="card-title mb-1">Device:</h6>
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
                CLIENT: {{ clientName }}
            </div>
            <div v-if="authStore.repairViewState == 'asignedRepairs'"> 
                TECHNICIAL: {{ employeeName}}
            </div>
            <div v-if="authStore.repairViewState == 'doneRepairs'">
                PICKUPDATE: {{repair.pickupDate}}
                TECH DIAGNOSIS: {{repair.techDiagnosis}}
                COST: {{repair.price + "€"}}
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
                    <RepairAsignedFormToDoneView :repair="repair" @finish="finish"></RepairAsignedFormToDoneView>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    data() {
        return {
            authStore: useAuthStore(),
            disable: false,
            form: false,
            clientName: "",
            employeeName: ""
        }
    },
    props: ['repair'],
    async created() {
        const responseClient = await API.getInfoFromClientID(this.repair.client,this.authStore.token)
        this.clientName = responseClient.name;
        const responseEmployee = await API.getInfoFromEmployeeID(this.repair.technician,this.authStore.token)
        this.employeeName = responseEmployee.name;
    },
    methods: {
        async deleteRepair() {
            this.disable = true;
            const response = await API.deleteRepair(this.repair._id, this.authStore.token)
        },
        async asignRepair() {
            this.disable = true;
            const response = await API.putAsignToEmployee(this.repair._id, this.authStore.id, this.authStore.token)
        },
        async activateForm() {
            this.form = !this.form;
        },
        async finish() {
            this.disable = true;
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