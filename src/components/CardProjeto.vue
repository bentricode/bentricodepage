<script setup>
import { defineProps} from 'vue';
const props = defineProps(['source']);
//Depois possivelmente deixar passar classes
</script>
<template>
    <article class="card-imagem col">
        <img :src="source" alt="Um projeto bem interessante" />
        <p class="card-text-z">
            <slot></slot>
        </p>
    </article>
</template>
<style scoped>
.card-imagem{
    max-width: 80%;
}
.card-imagem:hover{
    transform: scale(1.12);
    transition: all 0.5s;
}
.card-text-z{
    position: relative;
    bottom: 15%;
    z-index: 20;
    background-color: rgba(10,10,10,0.6);
    border: solid 2px white;
    border-radius: 6px;
    max-width: 100%;
    padding: 2px 10px;
    margin: 10px;
    text-align: center;
}
</style>