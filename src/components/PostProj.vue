<script setup>
    defineProps(['titulo', 'imagem','url','pi'])

</script>
<template>
    <section class="row gap-3 post-proj">
        
        <div class="col-12 col-md-7 col-lg-9 content-post">
            <h1 class="col-12 m-0 p-0 bold">{{ titulo }}</h1>
            <p class="col-12 mb-5 p-0"> 
                <slot>
                    
                </slot>
            </p>
            <a class="d-flex align-items-center gap-3   m-0 p-0 links-proj" :href="url">
                <i class="bi bi-github fs-3"></i>
                <h4 class="m-0 p-0">Confira o projeto </h4>
            </a>
        </div> 

        
        <img :class="'col m-0 p-0  ' +(pi ? 'order-first order-md-first' : 'order-first order-md-last')" :src="imagem" alt="">
    </section>

</template>
<style scoped>
    .content-post{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    img{
        width: 60%;
    }
    .post-proj{
        margin-bottom: 30px;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.233);
        border: rgb(78, 76, 76) solid 2px;
    }
    .post-proj:hover{

        background-color: black;
        padding: 25px;
        transition: all 0.5s;
        border: rgb(206, 203, 203) solid 2px;
    }

    .links-proj{
        text-decoration: none;
        color: rgb(158, 153, 153);
        transition: all 0.5s;
        position: absolute;
        bottom: 0;
    }
    .links-proj:hover{
        text-decoration: none;
        color: white;
    }
    @media (max-width: 767px){
        section{
            align-items: center;
            justify-content: center;
        }
        img{
            max-height:300px ;
        }
    }
</style>