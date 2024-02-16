<script setup>
defineProps(['icone','titulo']);
</script>
<template>
    <div class="minicard">
        <img class="minicard-icon" :src="icone" alt="i" />
        <h5>{{ titulo }}</h5>
        <slot> </slot>
    </div>
</template>
<style scoped>
.minicard{
    margin-bottom: 30px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.233);
    border: rgb(78, 76, 76) solid 2px;
}
.minicard-icon{
    width: 50px;
}
</style>