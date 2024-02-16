<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import Header from '../components/Header.vue';
import PostServ from '@/components/PostServ.vue';
import Minicard from '@/components/Minicard.vue';
</script>
<template>
  <Header></Header>
  <SectionHeader imgsrc="/banner.png">
    <template v-slot:titulo-secao>
      NOSSOS SERVIÇOS
    </template>
      Conheça alguns serviços da BentriCode!
  </SectionHeader>
  <main id="conteudo-proj" >
    <div class="container">
        <PostServ titulo="Aplicações Web" imagem="https://picsum.photos/200/300" url="#">
          Na era digital, a sua presença na web é o cartão de visitas para o sucesso. 
          Na BentriCode não apenas construímos sites, mas forjamos experiências cativantes que elevam a sua marca a novos patamares.
          <template v-slot:conteudo>
            <Minicard titulo="HTML 5 e CSS 3" icone="/card1.png">Utilizamos tecnologias modernas de desenvolvimento web.</Minicard>
            <Minicard titulo="Vue e React" icone="/card2.png">Utilizamos tecnologias modernas de desenvolvimento web.</Minicard>
            <Minicard titulo="Design Responsivo" icone="/card3.png">Nossas interfaces se adequam aos mais diversos dispostivos.</Minicard>
            <Minicard titulo="Web Dinâmica" icone="/card1.png">Fornecemos produtos dinâmicos e eficientes</Minicard>
          </template>
      </PostServ>
      <PostServ pi="true" titulo="API e Serviços" imagem="https://picsum.photos/200/300" url="#">
        A transformação digital é a chave para a inovação. 
        Deixe-nos ser o arquiteto do seu sucesso digital, desenvolvendo APIs poderosas e oferecendo serviços excepcionais.
          <template v-slot:conteudo>
            <Minicard titulo="Sob Medida" icone="/card1.png">Criamos APIs robustas e personalizadas para atender às necessidades exclusivas do seu negócio </Minicard>
            <Minicard titulo="Integração Perfeita" icone="/card2.png">Unifique sistemas, dados e processos com integrações perfeitas</Minicard>
            <Minicard titulo="Confiabilidade" icone="/card3.png">Seu serviço merece ser confiável e disponível</Minicard>
            <Minicard titulo="Serviços Adicionais" icone="/card1.png">Além do desenvolvimento de APIs, oferecemos uma gama de serviços para impulsionar sua plataforma</Minicard>
          </template>
      </PostServ>
      <PostServ  titulo="Design UI/UX" imagem="https://picsum.photos/200/300" url="#">
        Cada pixel conta uma história. No universo digital, a narrativa visual é a chave para criar conexões significativas. 
        Deixe-nos ser o designer da sua experiência, elevando sua marca a novos patamares com nosso serviço de Design UI/UX.
          <template v-slot:conteudo>
            <Minicard titulo="Intuitivo e Cativante" icone="/card1.png">Nossa abordagem centrada no usuário resulta em designs intuitivos que encantam, envolvem e retêm seus visitantes desde o primeiro clique.</Minicard>
            <Minicard titulo="Experiência Memorável" icone="/card2.png">Viva a experiência. Criamos jornadas de usuário que não são apenas funcionais, mas memoráveis. </Minicard>
            <Minicard titulo="Design Responsivo" icone="/card3.png">Nossas interfaces se adequam aos mais diversos dispostivos.</Minicard>
            <Minicard titulo="Integração Contínua" icone="/card1.png">O design é uma jornada, não um destino. Trabalhamos em estreita colaboração para garantir que cada detalhe atenda às suas expectativas.</Minicard>
          </template>
      </PostServ>
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
