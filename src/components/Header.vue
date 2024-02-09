<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Form from '../components/Form.vue'
import Button from '@/components/Button.vue'
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
<header class="fixed-top">

<nav class="navbar navbar-expand-lg" id="nav-header">
  <div class="container-fluid">

    <RouterLink to="/" class="navbar-brand">
        <img class="logo" id="logo-header" src="/bentrilogo.png" alt="BentriCode" />
    </RouterLink>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="menu" class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="link" href="#">Link</a>
        </li>
        
        <li class="nav-item">
          <a class="link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <Button>Fale Conosco</Button>
      <!--<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>-->
    </div>
    
  </div>
</nav>

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