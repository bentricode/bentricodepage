
<script setup>
import Card from '@/components/Card.vue';
import Dao from '@/components/Dao.vue';

</script>

<template>
    <!--SERVICOS-->
    <section id="servicos" class="container d-flex flex-column align-items-center py-5 px-2 conteudo-card">
        <h1 class="text-center blue bold ">Serviços</h1>
        <p class="text-center black">Lorem ipsum dolor sit amet consectetur. Dui facilisi eget ac venenatis in scelerisque nunc
            nibh dictumst.
            Eget suscipit nibh sit eget. <br /> Tortor vitae fermentum justo ornare sed gravida.</p>
        <article class="row justify-content-center mb-5 ">
            <Card imagem="/card1.png">Desenvolvimento Web</Card>
            <Card imagem="/card2.png">Tecnologias Modernas</Card>
            <Card imagem="/card3.png">Design UI/UX</Card>
        </article>
        <Dao></Dao>
    </section>
</template>

<style scoped>
        .conteudo-card{
            overflow: hidden;
        }
</style>