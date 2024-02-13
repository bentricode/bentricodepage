
<script>
import Button from "@/components/Button.vue";

export default {
    components: {
        Button
    },
    props: {
        // props ...
    },
    mounted() {
        document.addEventListener("DOMContentLoaded", function () {
            // Obtenha o elemento small-banner
            var smallBanner = document.querySelector('#o-banner');

            // Adicione um ouvinte de rolagem (scroll)
            window.addEventListener("scroll", function () {
                // Obtenha a posição do small-banner em relação ao topo da página
                var smallBannerPosition = smallBanner.offsetTop;

                // Obtenha a altura do small-banner
                var smallBannerHeight = smallBanner.offsetHeight;

                // Obtenha a posição de rolagem
                var scrollPosition = window.scrollY || window.pageYOffset;

                // Verifique se o header está completamente fora do small-banner
                if (scrollPosition > smallBannerPosition + smallBannerHeight) {
                    // Se sim, adicione a classe header-event
                    document.querySelector('header').classList.add('header-event');
                } else {
                    // Se não, remova a classe header-event
                    document.querySelector('header').classList.remove('header-event');
                }
            });
        });
    }
}
</script>
<template>
    <div id="o-banner" class="d-flex flex-column align-items-center justify-content-center text-white">
        <h1 id="titulo-banner" class="text-center"> TRANSFORMANDO IDEIAS EM SOFTWARE <br> <span class="bold">COM
                ESTILO!</span></h1>
        <p class="text-center">Vamos criar juntos? <br>
            Entre em contato e vamos transformar suas ideias em realidade digital com a BentriCode!</p>
        <Button id="botao-contato">Fale Conosco</Button>
    </div>
</template>
<style scoped>
/** BANNER **/
#o-banner {
    background-image: url('/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    padding: 20px;
}

@media (max-width: 576px) {

    /* Estilos para telas pequenas (exemplo: smartphones) */
    #o-banner {
        background-image: url('/bannermob.png');
        background-position: 400px left;
        /* Mantém a imagem à esquerda com 20px de padding à direita */


    }
}

@media (max-width: 800px) {

    /* Estilos para telas médias (exemplo: tablets) */
    #o-banner {
        background-image: url('/bannertab.png');
        background-position: left;
        /* Mantém a imagem à esquerda */

    }
}

@media (min-width: 900px) {

    /* Estilos para telas médias (exemplo: tablets) */
    p {
        font-size: 30px;
    }
}</style>