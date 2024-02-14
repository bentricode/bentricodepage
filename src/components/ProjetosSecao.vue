<script setup>
import { useRouter, useRoute } from 'vue-router'
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';

const router = useRouter();

function mudarRota(){
    router.push({
        name: 'projects'
    });
}
</script>

<template>
    <!--SERVICOS-->
    <section id="projetos" class="container d-flex flex-column align-items-center py-5 px-2 conteudo-card">
        <h1 class="text-center blue bold ">Nossos Projetos</h1>
        <p class="text-center black mb-1">Como parte do seu portfólio, a BentriCode já realizou diversos projetos em
            desenvolvimento e design.<br />  Confira mais abaixo: </p>
        <article class="row justify-content-center mb-5 gap-4">
            <img class="card-imagem col" src="/projeto1.png" />
            <img class="card-imagem col" src="/projeto2.png" />
        </article>
        <Button :metodo="mudarRota" texto="Ver Mais">
        </Button>
    </section>
</template>

<style scoped>
.card-imagem{
    max-width: 80%;
}
.card-imagem:hover{
    transform: scale(1.12);
    transition: all 0.5s;
}
        .conteudo-card{
            overflow: hidden;
        }
</style>