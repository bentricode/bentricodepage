<script setup>

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
                <p class="orange paragrafo-sobre">Saiba mais</p>
            </div>
        
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
    #sobrenos .orange{color: var(--cor-laranja);}

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