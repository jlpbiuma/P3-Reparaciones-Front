<template>
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
    <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header text-primary">Pending</div>
        <div class="card-body">
            <h6 class="card-title">Device:</h6>
            <h6 class="card-title">Issue:</h6>
            <h6 class="card-title">Self-Diagnosis:</h6>
            <h6 class="card-title">Enter Date:</h6>
            <h6 class="card-title">Technician:</h6>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    }
}
</script>

<style>
.card{
    margin-top: 100px;
}
</style>