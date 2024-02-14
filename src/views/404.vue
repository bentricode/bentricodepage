<script setup>
import Dao from '@/components/Dao.vue'
</script>

<template>

    <section class="">

        <article id='erro404' class="">
            <h1 class="text-danger text-center bold my-3">Erro 404</h1>
            <Dao></Dao>
            <h5 class="text-light text-center my-3"><span class="bold text-danger">Oops! </span> Essa página não existe</h5>
            
            <RouterLink to="/" class="btn btn-secondary my-2">Retornar</RouterLink>
        </article>
        
    </section>
    
</template>

<style scoped>
#erro404{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: var(--cor-blue);
}
</style>