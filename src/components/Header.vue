<script setup>
import { ref } from 'vue'
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

function abrirForm() {
  exibirForm.value = true;
}

</script>


<template>
  <header class="fixed-top">

    <nav class="navbar navbar-expand-lg " id="nav-header">
      <div class="container-fluid ">

        <RouterLink to="/" class="navbar-brand">
          <img class="logo" id="logo-header" src="/bentrilogo.png" alt="BentriCode" />
        </RouterLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list fs-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="menu" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="link" href="#">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="link" href="#">Equipe</a>
            </li>
            <li class="nav-item">
              <a class="link" href="#">Projetos</a>
            </li>
          </ul>
          <Button @click="toggleFaleconosco">Fale Conosco</Button>
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
/** HEADER **/

#logo-header {
  width: 60px;
}



#nav-header .botao {
  border-radius: 6px;
}

#menu {
  display: flex;
  gap: 15px;
  list-style: none;

}

#menu a {
  text-decoration: none;
}

.link {
  color: white;
  font-size: 18px;
  transition: all 300ms;
}

.link:hover {
  font-size: 20px;
  color: var(--cor-cinza);
}

.form-contate {
  color: white;
  border: 1px solid rgb(243, 209, 16);
  background-color: rgb(16, 16, 16);
  cursor: pointer;
}
</style>