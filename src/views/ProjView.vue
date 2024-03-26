<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import Header from '../components/Header.vue'
import PostProj from '@/components/PostProj.vue'
</script>
<template>
  <Header></Header>
  <SectionHeader imgsrc="/banner-projetos.png">
    <template v-slot:titulo-secao>
      NOSSOS PROJETOS
    </template>
    A incível História
  </SectionHeader>
  <main id="conteudo-proj" >
    <div class="container-fluid">
        <PostProj titulo="BentriCode Blog" imagem="/proj1.jpeg"  url="https://github.com/GabrielHenB/bentricode">
          Uma aplicação web, escrita em Laravel PHP e Bootstrap para o grupo Bentricode. Foi realizado como prática de desenvolvimento front-end e back-end.
      </PostProj>
      <PostProj pi="true" titulo="Editor de Fundos de Imagens" imagem="/projeto1.png" url="https://github.com/marlon-bento/api-segmentacao-de-imagens">
          Desenvolvimento de uma aplicação em Python capaz de remover o fundo de imagens em geral, gerido por uma API em Python Flask.
        <a class="text-light" target="_blank" href="https://bentricode-tirar-fundo-da-imagem.onrender.com/">
          Acesse o site ao vivo!
        </a>
      </PostProj>
      <PostProj  titulo="Portal de Filmes com API" imagem="/nazarik.png" url="https://github.com/GabrielHenB/nazarick-movies">
        Portal de filmes realizado com tecnologias emergentes do mercado, como bootstrap, JavaScript, HTML, site totalmente responsivo e dinâmico,
      </PostProj>
      <PostProj pi="true" titulo="Campainha Inteligente com App" imagem="/campaint.PNG" url="https://github.com/GabrielHenB/campainhaint_iot2">
        Aplicação de Campainha Inteligente que reconhece o rosto do visitante e o salva em um banco de dados para posterior acesso por meio de aplicativo.
         O projeto utilizava Vue e Python Flask. A camera foi implementada por meio de um Esp-32-Cam.
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
