<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <main>
        <h1>CREATE NEW REPAIR</h1>
        <form class="form">
            <label>
                DEVICE
                <input type="text" v-model="newRepair.device" />
            </label>
            <label>
                ISSUE:
                <input type="text" v-model="newRepair.issue" />
            </label>
            <label>
                SELFDIAGNOSIS:
                <input type="email" v-model="newRepair.selfdiagnosis" />
            </label>
            <button @click.prevent="createNewRepair()">Create</button>
        </form>
    </main>

</template>

<script>
export  default {
    data(){
        return {
        newRepair: {
            device: '',
            issue: '',
            selfdiagnosis: ''
            },
        authStore: useAuthStore()
        }
    },
    methods: {
        async createNewRepair(){
            const rightNow = new Date();
            this.newRepair.enterDate = rightNow.toISOString()
            this.newRepair.client = this.authStore.userId;
            const response = await API.postNewRepair(this.newRepair, this.authStore.token)
            if (response.error) {
                alert('Error creating a new Repair')
            }
            else
            {
                this.$router.push({name: 'unasignedRepairs'})
            }
        }
    }
}
</script>