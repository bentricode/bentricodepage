
<script setup>
import Card from '@/components/Card.vue';
import Dao from '@/components/Dao.vue';

</script>

<template>
    <!--SERVICOS-->
    <section id="servicos" class="container d-flex flex-column align-items-center py-5 px-2 conteudo-card">
        <h1 class="text-center blue bold ">Serviços</h1>
        <p class="text-center black">A BentriCode oferece uma vasta gama de serviços, desde a criação de interfaces UI/UX até o desenvolvimento de Páginas Web complexas e elegantes.
          <br/> Confira alguns de nossos serviços abaixo.</p>
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