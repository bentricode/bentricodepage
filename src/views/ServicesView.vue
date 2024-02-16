<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import Header from '../components/Header.vue'
import PostServ from '@/components/PostServ.vue'
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
    <div class="container">
        <PostServ titulo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab." imagem="https://picsum.photos/200/300" url="#">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae qui assumenda maiores error repellat ipsam, nulla ea expedita repellendus accusantium cum voluptatem, laboriosam dolor. Voluptas incidunt ipsa illo facilis?
      </PostServ>
      <PostServ pi="true" titulo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab." imagem="https://picsum.photos/200/300" url="#">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae qui assumenda maiores error repellat ipsam, nulla ea expedita repellendus accusantium cum voluptatem, laboriosam dolor. Voluptas incidunt ipsa illo facilis?
      </PostServ>
      <PostServ  titulo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab." imagem="https://picsum.photos/200/300" url="#">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae qui assumenda maiores error repellat ipsam, nulla ea expedita repellendus accusantium cum voluptatem, laboriosam dolor. Voluptas incidunt ipsa illo facilis?
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
