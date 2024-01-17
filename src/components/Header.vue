<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Form from '../components/Form.vue'
/**
 * A fazer:
 * - passar o form para v-model
 * - mais links
 * 
 */
const exibirForm = ref(false);

function abrirForm(){
    exibirForm.value = true;
}

</script>


<template>
<header class="bg-dark">

<div class="container">
    <nav class="bg-dark row navbar navbar-expand-lg navbar-dark">
        <div class="col-2 col-sm-1 d-block d-lg-none order-0 me-sm-3" style="">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="col col-lg-2 text-light order-1">
            <RouterLink class="navbar-brand" to="/">
            Bentri<span style="color:#782FB7;">Code</span>
            </RouterLink>
        </div>
        <div class="col-12 col-lg order-3 order-lg-2">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="about">Sobre Nozes</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="projects">O que Fazemos</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="partners">Parceiros</RouterLink>
                    </li>
                </ul>
                <div @click="abrirForm" class="d-flex form-pesquisar form-contate p-1">
                    Vamos Conversar
                </div>
                
            </div>

        </div>
        <!--<div class="col-2  order-2 order-lg-3 ">
            <div class="d-flex justify-content-end">
                <div class="dropdown">
                    <button class="btn text-light dropdown-toggle border-0 d-flex align-items-center " type="button"
                    id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="me-2">Menu</span>
                    <i class="bi bi-person-circle fs-3"></i>
                    

                    </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    <li class="d-flex justify-content-between mx-3">
                        <a class="dropdown-item  p-0" href="#">Produtos</a>
                        <i class="bi bi-cart2"></i>
                    </li>
                    <li class="d-flex justify-content-between mx-3">
                        <a class="dropdown-item p-0" href="teste">Informações</a>
                        <i class="bi bi-info-circle"></i>
                    </li>
                </ul>
                </div>
            </div>
        </div> -->


    </nav>
</div>


</header>
<!-- Header final -->
<Form v-if="exibirForm"></Form>
</template>

<style scoped>
.form-contate{
    color: white;
    border: 1px solid rgb(243, 209, 16);
    background-color: rgb(16,16,16);
    cursor: pointer;
}
</style>