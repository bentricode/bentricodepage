<script setup>
    defineProps(['imagem']);
</script>
<template>
    <div class="col-12 col-md-6 col-lg-4 cards ">
        <img class=" imagens-card" :src="imagem" alt="">
        <div class=" p-2  descricao-card d-flex justify-content-between align-items-center">
            <p class=" m-0 p-0 bold texto-card fs-6">            
                <slot></slot>
            </p>
            <button class="botao-card text-light">Saiba +</button>

        </div>
    </div>
</template>
<style scoped>
    .cards{
        margin: 15px 0;
        -webkit-box-shadow: 9px 11px 20px -12px rgba(0,0,0,0.75);
        -moz-box-shadow: 9px 11px 20px -12px rgba(0,0,0,0.75);
        box-shadow: 9px 11px 20px -12px rgba(0,0,0,0.75);
        border-radius: 0px 0px 12px 12px;
        overflow: hidden;
    }
    .descricao-card{

        background-color: #FAFAFA;
        
    }
    .texto-card{
        color: var(--cor-primaria);
    }
    .imagens-card{
        max-width: 100%;
        width: 100%;
    }
    .botao-card{
        background-color: var(--cor-primaria);
        border: none;
        border-radius: 10px;
        padding: 4px 22px;
    }
</style>