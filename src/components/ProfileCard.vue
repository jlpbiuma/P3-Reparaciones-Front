<script setup>

</script>

<template>
    <div id="containerProfile">
        <div id="name">
            {{profile.name}}
        </div>
        <div id="rol">
            {{profile.rol}}
        </div>
        <div id="dni">
            {{profile.dni}}
        </div>
        <div id="email">
            {{profile.email}}
        </div>
        <div id="phone">
            {{profile.phone}}
        </div>
    </div>
</template>

<script>
export default {
    props: ["profile"]
}
</script>

<style>

</style>