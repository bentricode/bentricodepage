<script setup>
    defineProps(['titulo', 'imagem','url','pi'])

</script>
<template>
    <section class="row gap-3 post-proj">
        
        <div class="col-12 col-md-7 col-lg-8 content-post">
            <h1 class="col-12 m-0 p-0 bold mx-2 mt-3">{{ titulo }}</h1>
            <p class="col-12 mb-5 p-0 mx-2"> 
                <slot>
                    
                </slot>
                <div class="d-flex flex-wrap gap-1 my-2">
                    <slot name="conteudo">

                    </slot>
                </div>
            </p>

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
        
        background-color: rgba(0, 0, 0, 0.233);
        border: rgb(78, 76, 76) solid 2px;
    }
    .post-proj:hover{

        background-color: black;
        
        transition: all 0.5s;
        border: rgb(206, 203, 203) solid 2px;
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