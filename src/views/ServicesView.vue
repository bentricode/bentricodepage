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
      <PostServ titulo="API e Serviços" imagem="/cover1.jpg" url="#">
        A transformação digital é a chave para a inovação. 
        Deixe-nos ser o arquiteto do seu sucesso digital, desenvolvendo APIs poderosas e oferecendo serviços excepcionais.
          <template v-slot:conteudo>
            <Minicard titulo="Sob Medida" icone="/pesquisa.png">Criamos APIs robustas e personalizadas para atender às necessidades exclusivas do seu negócio </Minicard>
            <Minicard titulo="Integração Perfeita" icone="/integration.png">Unifique sistemas, dados e processos com integrações perfeitas</Minicard>
            <Minicard titulo="Confiabilidade" icone="/seguranca-da-web.png">Seu serviço merece ser confiável e disponível</Minicard>
            <Minicard titulo="Serviços Adicionais" icone="/adicionais.png">Além do desenvolvimento de APIs, oferecemos uma gama de serviços para impulsionar sua plataforma</Minicard>
          </template>
      </PostServ>
        <PostServ pi="true" titulo="Aplicações Web" imagem="/cover2.jpg" url="#">
          Na era digital, a sua presença na web é o cartão de visitas para o sucesso. 
          Na BentriCode não apenas construímos sites, mas forjamos experiências cativantes que elevam a sua marca a novos patamares.
          <template v-slot:conteudo>
            <Minicard titulo="HTML 5 e CSS 3" icone="/pagina-da-internet.png">Utilizamos tecnologias modernas de desenvolvimento web.</Minicard>
            <Minicard titulo="Vue e React" icone="/reactvue.png">Utilizamos tecnologias modernas de desenvolvimento web.</Minicard>
            <Minicard titulo="Design Responsivo" icone="/design-responsivo.png">Nossas interfaces se adequam aos mais diversos dispostivos.</Minicard>
            <Minicard titulo="Web Dinâmica" icone="/desenvolvimento-web.png">Fornecemos produtos dinâmicos e eficientes</Minicard>
          </template>
      </PostServ>

      <PostServ  titulo="Design UI/UX" imagem="/cover3.jpg" url="#">
        Cada pixel conta uma história. No universo digital, a narrativa visual é a chave para criar conexões significativas. 
        Deixe-nos ser o designer da sua experiência, elevando sua marca a novos patamares com nosso serviço de Design UI/UX.
          <template v-slot:conteudo>
            <Minicard titulo="Intuitivo e Cativante" icone="/lampada.png">Nossa abordagem centrada no usuário resulta em designs intuitivos que encantam, envolvem e retêm seus visitantes desde o primeiro clique.</Minicard>
            <Minicard titulo="Experiência Memorável" icone="/visao.png">Viva a experiência. Criamos jornadas de usuário que não são apenas funcionais, mas memoráveis. </Minicard>
            <Minicard titulo="Comunicação Aberta" icone="/talk.png">O design é uma jornada, não um destino. Trabalhamos em estreita colaboração para garantir que cada detalhe atenda às suas expectativas.</Minicard>
            <Minicard titulo="Soluções Únicas" icone="/star.png">Desenhando o inédito, criamos não apenas soluções, mas assinaturas únicas para cada cliente.</Minicard>
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
