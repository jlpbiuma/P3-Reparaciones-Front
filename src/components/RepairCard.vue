<template>
    <div>
        DISPOSITIVO: {{repair.device}}
    </div>
    <div>
        PROBLEMA: {{repair.issue}}
    </div>
    <div>
        AUTODIAGNÓSTICO: {{repair.selfdiagnosis}}
    </div>
    <div>
        CLIENT: {{repair.client}}
    </div>
</template>

<script>
export default {
    props: ['repair']
}
</script>

<style>
</style>