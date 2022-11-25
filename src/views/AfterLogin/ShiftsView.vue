<script setup>
import { RouterView } from 'vue-router'
import ShiftsList from '../../components/ShiftsList.vue'
import ReparationBar from '../../components/Reparationbar.vue'
</script>

<template>
    <ReparationBar></ReparationBar>
    <RouterView />
    <ShiftsList></ShiftsList>
</template>

<script>
</script>

<style>
</style>