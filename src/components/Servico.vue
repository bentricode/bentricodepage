
<script setup>
import Card from '@/components/Card.vue';

</script>

<template>
    <!--SERVICOS-->
    <section class="container-fluid d-flex flex-column align-items-center py-5 px-2">
        <h2 class="text-center blue ">Serviços</h2>
        <p class="text-center black">Lorem ipsum dolor sit amet consectetur. Dui facilisi eget ac venenatis in scelerisque nunc
            nibh dictumst.
            Eget suscipit nibh sit eget. <br /> Tortor vitae fermentum justo ornare sed gravida.</p>
        <article class="row justify-content-center mb-5">
            <Card imagem="/card1.png">Desenvolvimento Web</Card>
            <Card imagem="/card2.png">Tecnologias Modernas</Card>
            <Card imagem="/card3.png">Design UI/UX</Card>
        </article>
        <img class="rotating-element" src="/Udao.png" alt="">
    </section>
</template>

<style scoped>
        .rotating-element {
            width: 100px;
            height: 100px;

            animation: rotate 3s infinite linear;
        }

        @keyframes rotate {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(360deg);
            }
        }
</style>