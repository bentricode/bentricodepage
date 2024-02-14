<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import Header from '../components/Header.vue'
</script>
<template>
  <Header></Header>
  <SectionHeader>
    <template v-slot:titulo-secao>
      SAIBA MAIS SOBRE NÓS
    </template>
      A incrível história da BentriCode
  </SectionHeader>
  <main class="container main text-dark p-0">
    <div class="bg-light">
      <div class="container-fluid bg-light">
        <article class="row">
          <div class="col-6">
            <img src="/bentrilogo2.jpeg" width="210px" class="rounded my-2 mx-auto text-right logo-text" alt="BentriCode">
          </div>
          <div class="col-6">
            <h1 class="fw-bold text-left">A BentriCode!</h1>
            <p>
              A BentriCode é uma equipe de desenvolvedores prontos para entregar o melhor e mais atual do mercado. 
            </p>
          </div>
        </article>
        <article class="row mt-2 text-center nossos-servicos">
                <div class="col-12">
                    <h1> > Nossos Serviços</h1>
                </div>
                <div class="col m-2">
                    <div class="col-12 fs-4 fw-bold">web</div>
                    <div class="col-12"><i class="bi bi-braces"></i></div>
                    <div class="col-12">Desenvolvimento de front-end e back-end para plataformas web</div>
                </div>
                <div class="col m-2">
                    <div class="col-12 fs-4 fw-bold">mobile</div>
                    <div class="col-12"><i class="bi bi-android"></i></div>
                    <div class="col-12">Aplicativos mobile para Android e interfaces</div>
                </div>
                <div class="col m-2">
                    <div class="col-12 fs-4 fw-bold">iot</div>
                    <div class="col-12"><i class="bi bi-router"></i></div>
                    <div class="col-12">Soluções IoT diversas</div>
                </div>
                <div class="col m-2">
                    <div class="col-12 fs-4 fw-bold">ui/ux</div>
                    <div class="col-12"><i class="bi bi-window-fullscreen"></i></div>
                    <div class="col-12">Design de interfaces UI/UX para serviços</div>
                </div>
        </article>
        <article class="row mt-2 text-center especialidades">
          <div class="col-12">
            <h1>> Nossas Especialidades</h1>
          </div>
          <div class="row mt-1">
            <div class="col-6 text-center">
              <h2>Do nada ao tudo!</h2>
            </div>
            <div class="col-6 text-center">
              <div class="col m-2">
                    <div class="col-12 fs-4 fw-bold">agilidade</div>
                    <div class="col-12"><i class="bi bi-braces"></i></div>
                    <div class="col-12">Entregas agéis e rápidas</div>
                </div>
                <div class="col m-2">
                    <div class="col-12 fs-4 fw-bold">eficiência</div>
                    <div class="col-12"><i class="bi bi-braces"></i></div>
                    <div class="col-12">Resultados eficientes e funcionais</div>
                </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
.logo-text{
  text-align: right;
}
</style>
