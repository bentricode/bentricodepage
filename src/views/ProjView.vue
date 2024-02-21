<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import Header from '../components/Header.vue'
import PostProj from '@/components/PostProj.vue'
</script>
<template>
  <Header></Header>
  <SectionHeader imgsrc="/banner.png">
    <template v-slot:titulo-secao>
      NOSSOS PROJETOS
    </template>
    A incível História
  </SectionHeader>
  <main id="conteudo-proj" >
    <div class="container-fluid">
        <PostProj titulo="BentriCode Blog" imagem="/proj1.jpeg"  url="https://github.com/GabrielHenB/bentricode">
          A web application project written in PHP Laravel and Bootstrap for a fictional development company called Bentricode. We aim to practice front-end and back-end development using this project.
      </PostProj>
      <PostProj pi="true" titulo="Editor de Fundos de Imagens">
      
        <a class="text-light" target="_blank" href="https://bentricode-tirar-fundo-da-imagem.onrender.com/">
          Link do site de exemplo
        </a>
      </PostProj>
      <PostProj  titulo="Portal de filmes" imagem="/nazarik.png" url="https://github.com/GabrielHenB/nazarick-movies">
        Portal de filmes realizado com tecnologias emergentes do mercado, como bootstrap, JavaScript, HTML, site totalmente responsivo e dinâmico,
      </PostProj>
    </div>

  </main>
</template>

<style scoped>
#conteudo-proj{
  background-color: var(--cor-blue);
  padding: 50px;
}

.logo-text{
  text-align: right;
}

</style>
