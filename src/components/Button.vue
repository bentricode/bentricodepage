<script setup>
defineProps(['id','metodo','texto'])
/*
const mostrarFaleconosco = ref(false);

function fecharFaleconosco(){
    mostrarFaleconosco.value = !mostrarFaleconosco.value;
}*/
</script>
<template>
    <!--<button @click="mostrarFaleconosco = !mostrarFaleconosco" class="botao bold"><slot></slot></button>-->

    <button :id="id" @click="metodo" class="botao bold">{{ texto }}</button>
    <slot></slot>
    <!--<Faleconosco v-if="mostrarFaleconosco" @fechar="fecharFaleconosco" />-->
</template>
<style scoped>
    .botao{
        color: var(--cor-blue);
    }
</style>

