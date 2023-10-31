<script setup>
//const props = defineProps(['attributeBag'])
</script>

<template>
    <header class="headersecao text-center text-white">
        <h1 class="titulosecao">
            > <slot name="titulo-secao"></slot>
        </h1>
        <span class="descricaosecao">
            <slot></slot>
        </span>
    </header>
</template>

<style scoped>
.headersecao{
    background-image: url(/dark-purple.jpg); /* Trocar depois */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    
    height: 300px;
    background-color: #101010;
}
.titulosecao, .descricaosecao{
    padding-top: 50px;
}
.titulosecao{
    font-size: 26pt;
}
.descricaosecao{
    font-size: large;
}
</style>