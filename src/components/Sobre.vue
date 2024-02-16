<script setup>
import {ref, computed} from 'vue';

const toggleMore = ref(false);
const saberMais = computed(() => {
    return toggleMore.value ? "Saiba menos" : "Saiba mais";
});
</script>

<template>
    <section id="sobrenos" class="container-fluid ">
            <img src="/aboutus.png" id="foto-sobre" class="col-lg-4 deleteme" alt="" />
            <div class="col">
                <h2 class="titulo-sobre">Sobre</h2>
                <p class="paragrafo-sobre">A BentriCode é  uma equipe de desenvolvedores apaixonados por criar experiências excepcionais na web. Com uma mistura de habilidades front-end e back-end, estamos prontos para enfrentar desafios e entregar soluções de alta qualidade.
                </p>
                <p class="paragrafo-sobre">Nossa Abordagem:
        Trabalhamos de forma colaborativa, unindo nossas habilidades complementares para criar aplicações web que são visualmente atraentes, altamente funcionais e eficientes em termos de desempenho. Adoramos enfrentar desafios complexos e estamos comprometidos em entregar produtos de acordo com as expectativas de nossos clientes.</p>
                <p v-on:click="toggleMore = !toggleMore" class="orange paragrafo-sobre">{{ saberMais }}</p>
            </div>
        
    </section>
    <section v-if="toggleMore" class="sobrenos-extra container-fluid">
        <div class="col">
            <h2 class="titulo-sobre">Por Quê Escolher A BentriCode ?</h2>
            <p class="paragrafo-sobre"> 
                Na BentriCode, não apenas construímos sites; 
                construímos pontes entre sua visão e a presença online extraordinária que você merece. <br>
                Juntos, vamos moldar o futuro da sua marca na web!
            </p>
            <div class="d-flex gap-4 justify-content-evenly mt-2 text-center align-items-center">
                <div>
                    <i class="bi bi-cpu-fill"></i>
                    <p>Tecnologias Modernas</p>
                </div>
                <div>
                    <i class="bi bi-stars"></i>
                    <p>Compromisso com a qualidade</p>
                </div>
                <div>
                    <i class="bi bi-file-earmark-person-fill"></i>
                    <p>Soluções Personalizadas</p>
                </div>
                <div>
                    <i class="bi bi-chevron-bar-contract"></i>
                    <p>Integração Contínua</p>
                </div>
            </div>
        </div>
        <img src="/aboutus.png" id="foto-sobre" class="col-lg-4 deleteme" alt="">
    </section>
</template>

<style scoped>
    /** SOBRE NOS **/
    #foto-sobre{
        width: 50%;
    }

    #sobrenos{
        background-color: var(--cor-primaria);
        display: flex;
        gap: 20px;
        padding: 6%;
    }

    #sobrenos h2{
        color: var(--cor-laranja);
    }

    #sobrenos p{color: white;}
    #sobrenos .orange{color: var(--cor-laranja); cursor: pointer;}

    .sobrenos-extra{
        background-color: var(--cor-primaria);
        display: flex;
        gap: 20px;
        padding: 6%;
    }
    .sobrenos-extra h2{color: var(--cor-laranja);}
    .sobrenos-extra p{color: white;}

    @media (max-width: 870px){
        .deleteme{
            display: none;
        }
    }
    @media (min-width: 1100px){
        #foto-sobre{
            width: 40%;
        }
        #sobrenos{
            gap: 30px;
        }
        .titulo-sobre{
            font-size: 40px;
        }
        .paragrafo-sobre{
            font-size: 24px;
        }

    }

</style>