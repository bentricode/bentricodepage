<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useCounterStore } from '@/stores/counter.js';
import Button from '@/components/Button.vue'
import Faleconosco from '@/components/Faleconosco.vue'
/**
 * A fazer:
 * - passar o form para v-model
 * - mais links
 * 
 */
const mostrarFaleconosco = ref(false);
const router = useRouter();
const route = useRoute();

const counterStore = useCounterStore();

    const isSobre = counterStore.isSobre;
    const isChangingSobre = ref(false);
    const isChangingProj = ref(false);
    const isChangingServ = ref(false);

    const setSobre = () => {
      counterStore.setIsSobre(true);
    };
    const setServicos = () => {
      counterStore.setIsServicos(true);
    };
    const setProjetos = () => {
      counterStore.setIsProjetos(true);
    };


function fecharFaleconosco(){
    mostrarFaleconosco.value = !mostrarFaleconosco.value;
}

function scrollSobre(){
    const sobre = document.querySelector('#sobrenos');
    if(sobre){
      sobre.scrollIntoView({
        behavior: 'smooth',
      });
    }else{
      setSobre();
      isChangingSobre.value = true;
      router.push({
        name: 'home'
      });
    }
}

function scrollProj(){
    const projeto = document.querySelector('#projetos');
    if(projeto){
      projeto.scrollIntoView({
        behavior: 'smooth',
      });
    }else{
      setProjetos();
      isChangingProj.value = true;
      router.push({
        name: 'home'
      });
    }
}

function scrollServ(){
    const servico = document.querySelector('#servicos');
    if(servico){
      servico.scrollIntoView({
        behavior: 'smooth',
      });
    }else{
      setServicos();
      isChangingServ.value = true;
      router.push({
        name: 'home'
      });
    }
}

function scrollEquipe(){
  //Se a rota nao for home mude para home
  if(route.name !== 'home')
    router.push({name: 'home'});
  else
    document.querySelector('#equipe').scrollIntoView({behavior: 'smooth'});
}

onMounted(() => {
  if(counterStore.isSobre){
    document.querySelector('#sobrenos').scrollIntoView();
  }
  if(counterStore.isServico){
    document.querySelector('#servicos').scrollIntoView();
  }
  if(counterStore.isProjeto){
    document.querySelector('#projetos').scrollIntoView();
  }
})

onBeforeRouteUpdate(() => {
  if(!isChangingSobre.value)
    counterStore.setIsSobre(false);
  if(!isChangingServ.value)
    counterStore.setIsServicos(false);
    if(!isChangingProj.value)
    counterStore.setIsProjetos(false);
})

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
              <RouterLink to="/" class="link" aria-current="page"  >Home</RouterLink>
              <!--Link de roteamento para o home-->
            </li>
            <li class="nav-item">
              <!--manter o href e o evento-->
              <a class="link" id="vaiprosobre" @click="scrollSobre"  href="#sobrenos">Sobre</a>
            </li>
            <li class="nav-item">
              <!--manter o href-->
              <a class="link" @click="scrollEquipe" href="#equipe">Equipe</a>
            </li>
            <li class="nav-item">
              <!--manter o href e o evento-->
              <a class="link" @click="scrollServ"  href="#servicos">Serviços</a>
            </li>
            <li class="nav-item">
              <!--manter o href e o evento-->
              <a class="link" @click="scrollProj" href="#projetos">Projetos</a>
            </li>
          </ul>
          <Button id="seilacara" :metodo="fecharFaleconosco" texto="Fale Conosco"> 
            <Faleconosco v-if="mostrarFaleconosco" @fechar="fecharFaleconosco"></Faleconosco>
          </Button>
          
        </div>

      </div>
    </nav>

  </header>
  <!-- Header final -->
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

.header-event .link{
    color: var(--cor-laranja); 
}

.header-event .link:hover{
    color: var(--cor-laranja-claro); 
}

.form-contate {
  color: white;
  border: 1px solid rgb(243, 209, 16);
  background-color: rgb(16, 16, 16);
  cursor: pointer;
}
</style>