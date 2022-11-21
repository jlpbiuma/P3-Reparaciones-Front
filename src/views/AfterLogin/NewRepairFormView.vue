<script setup>
import API from '../../services/api.js'
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
            }
        }
    },
    methods: {
    async createNewRepair(){
        const response = await API.postNewRepair(this.newRepair)
        if (response.error) {
            alert('Error creating a new Repair')
        }
        else
        {
            this.$router.push({name: 'myrepairs'})
        }
    }
    }
}
</script>