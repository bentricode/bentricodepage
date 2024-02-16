<script setup>
import {onMounted} from 'vue';
const props = defineProps(['imgsrc'])
onMounted(() => {
    
    // Obtenha o elemento small-banner
    let smallBanner = document.querySelectorAll('.o-banner')[0];

    // Adicione um ouvinte de rolagem (scroll)
    window.addEventListener("scroll", function () {
        // Obtenha a posição do small-banner em relação ao topo da página
        const smallBannerPosition = smallBanner.offsetTop;

        // Obtenha a altura do small-banner
        const smallBannerHeight = smallBanner.offsetHeight;

        // Obtenha a posição de rolagem
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Verifique se o header está completamente fora do small-banner
        if (scrollPosition > smallBannerPosition + smallBannerHeight) {
            // Se sim, adicione a classe header-event
            document.querySelector('header').classList.add('header-event');
        } else {
            // Se não, remova a classe header-event
            document.querySelector('header').classList.remove('header-event');
        }
    });

})
</script>

<template>
    <header class="o-banner headersecao text-center text-white" :style="{ backgroundImage: `url('${imgsrc}')` }">
        <h1 class="titulosecao m-0 p-0">
             <slot name="titulo-secao"></slot>
        </h1>
        <p class="descricaosecao">
            <slot></slot>
        </p>
    </header>
</template>

<style scoped>
.headersecao{
    background-image: url(/dark-purple.jpg); /* Trocar depois */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:65vh;
    background-color: #101010;
}
.titulosecao, .descricaosecao{
    
}
.titulosecao{
    font-size: 26pt;
}
.descricaosecao{
    font-size: large;
}
</style>