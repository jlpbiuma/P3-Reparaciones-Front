<script setup>
import API from '../../services/api.js'
</script>

<template>
    <main>
        <h4>CREATE NEW REPAIR</h4>
        <form class="form">
        <div class="form-group-input">
            <label for="formGroupExampleInput">Device</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" v-model="newRepair.device">
        </div>
        <div class="form-group-input">
            <label for="formGroupExampleInput">Issue</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" v-model="newRepair.issue">
        </div>
        <div class="form-group-textArea">
        <label for="exampleFormControlTextarea1"><small> Self-Diagnosis</small></label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="tell us more..." v-model="newRepair.selfdiagnosis"></textarea>
        </div>
        <div>
        <button type="button" class="btn btn-primary btn-sm" @click.prevent="createNewRepair()">Create</button>
        </div>
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

<style scoped lang="scss">

form{
    margin-top: 15px;
}

.form-control:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    } 
.form-group-input{
    width: 300px;
    
}
.form-group-textArea{
    width: 300px;
}

.btn{
    margin-top: 15px;
}
</style>