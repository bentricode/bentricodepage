<script setup>
import Banner from '@/components/Banner.vue';
import Card from '@/components/Card.vue';

</script>

<template>
 <Banner />


 <section id="sobrenos" class="container-fluid">
 <article class="row p-5">
    <img src="/aboutus.png" id="foto-sobre" class="col deleteme" alt="" />
    <div class="col">
        <h2>Sobre</h2>
        <p>A BentriCode é  uma equipe de desenvolvedores apaixonados por criar experiências excepcionais na web. Com uma mistura de habilidades front-end e back-end, estamos prontos para enfrentar desafios e entregar soluções de alta qualidade.
        </p>
        <p>Nossa Abordagem:
Trabalhamos de forma colaborativa, unindo nossas habilidades complementares para criar aplicações web que são visualmente atraentes, altamente funcionais e eficientes em termos de desempenho. Adoramos enfrentar desafios complexos e estamos comprometidos em entregar produtos de acordo com as expectativas de nossos clientes.</p>
        <p class="orange">Saiba mais</p>
    </div>
</article>
</section>

<!--SERVICOS-->
<section class="container-fluid d-flex flex-column align-items-center">
    <h2 class="text-center">Serviços</h2>
    <p class="text-center">Lorem ipsum dolor sit amet consectetur. Dui facilisi eget ac venenatis in scelerisque nunc nibh dictumst. 
Eget suscipit nibh sit eget. <br/> Tortor vitae fermentum justo ornare sed gravida.</p>
    <article class="row justify-content-center">
        <Card  imagem="/card1.png">Desenvolvimento Web</Card>
        <Card  imagem="/card2.png">Tecnologias Modernas</Card>
        <Card  imagem="/card3.png">Design UI/UX</Card>
    </article>
    <img src="/Udao.png" alt="">
</section>


<section class="container-fluid equipe">
    <h2 class=" d-block d-md-none text-light text-center">NOSSA EQUIPE</h2>
    <div class=" d-flex align-items-center justify-content-center" >

        <img class="nossaequipe d-none d-md-block" src="/nossaequipe.png" alt="">
        <article class="d-flex flex-column gap-3 justify-content-center">
            <div class="row card-equipe">
                <img class="col-12 col-md-6 imagem-equipe" src="/ga2.jpg" alt="">
                <div class="col-12 col-md-6 text-light caixa-equipe">
                    <h3> <span class="bold">Nome:</span> Gabriel</h3>
                    <h5>Habilidades:</h5>
                    <div class="">
                        <ul class="habilidades">
                            <li>
                                <div class="lista">
                                    <p>HTML/CSS</p>
                                    <div class="nivel">
                                        <div class="avancado"></div>
                                    </div>  
                                </div>
        
                            </li>
                            <li>
                                <div class="lista">
                                    <p>PHP</p>
                                    <div class="nivel">
                                        <div class="intermediario"></div>
                                    </div> 
                                </div>
        
                                
                            </li>
                            <li>
                                <div class="lista">
                                    <p>Laravel</p>
                                    <div class="nivel">
                                        <div class="intermediario"></div>
                                    </div> 
                                </div>
                            </li>
                            <li>
                                <div class="lista">
                                    <p>Vue.js</p>
                                    <div class="nivel">
                                        <div class="basico"></div>
                                    </div> 
                                </div>
                            </li>
                            <li>
                                <div class="lista">
                                    <p>React.js</p>
                                    <div class="nivel">
                                        <div class="basico"></div>
                                    </div> 
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="fs-3 d-flex gap-3">
                        <a class="icon-link" href="https://www.linkedin.com/in/gabriel-braz-4a6b06224/"><i class="bi bi-linkedin"></i></a>
                        <a class="icon-link" href="https://github.com/GabrielHenB"><i class="bi bi-github"></i></a>        
                    </div>
            </div>
    
    
            </div>
            <div class="row card-equipe">
                <img class="col-12 col-md-6  imagem-equipe" src="/marlon.jpg" alt="">
                <div class="col-12 col-md-6  text-light caixa-equipe">
                    <h3> <span class="bold">Nome:</span> Márlon</h3>
                    <h5>Habilidades:</h5>
                    <div class="">
                        <ul class="habilidades">
                            <li>
                                <div class="lista">
                                    <p>HTML/CSS</p>
                                    <div class="nivel">
                                        <div class="avancado"></div>
                                    </div>  
                                </div>
        
                            </li>
                            <li>
                                <div class="lista">
                                    <p>PHP</p>
                                    <div class="nivel">
                                        <div class="intermediario"></div>
                                    </div> 
                                </div>
    
                                
                            </li>
                            <li>
                                <div class="lista">
                                    <p>Laravel</p>
                                    <div class="nivel">
                                        <div class="intermediario"></div>
                                    </div> 
                                </div>
                            </li>
                            <li>
                                <div class="lista">
                                    <p>Vue.js</p>
                                    <div class="nivel">
                                        <div class="basico"></div>
                                    </div> 
                                </div>
                            </li>
                            <li>
                                <div class="lista">
                                    <p>React.js</p>
                                    <div class="nivel">
                                        <div class="basico"></div>
                                    </div> 
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="fs-3 d-flex gap-3">
                    <a class="icon-link" href="https://www.linkedin.com/in/marlon-bento-461ba755/"><i class="bi bi-linkedin"></i></a>
                    <a class="icon-link" href="https://github.com/marlon-bento"><i class="bi bi-github"></i></a>        
                </div>
                </div>
                
            </div>
        </article>
    </div>

</section>
<!--EQUIPE-->

<!--PROJETOS-->

<!--FOOTER-->

</template>

<style scoped>
    .card-equipe{

    }

  
    .imagem-equipe{
        width: 200px;
    }

    .equipe{
        padding: 40px;
        background-color: var(--cor-blue);
    }
    .nossaequipe{
        margin: 0 20px 0 0;
    }
    .lista{
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
    }
    .nivel{
        margin: 0 0 0 30px ;
        background-color: gray;
        border-radius: 30px;
        width: 250px;
        height: 20px;
        overflow: hidden;
    }
    .basico{
        height: 100%;
        background-color: var(--cor-barra);
        animation: nivel-cresce-basico 1s forwards;
    }
    .intermediario{
        height: 100%;
        background-color: var(--cor-barra);
        animation: nivel-cresce-intermediario 1s forwards;
    }
    .avancado{
        height: 100%;
        background-color: var(--cor-barra);
        animation: nivel-cresce-avancado 1s forwards;
    }
    .icon-link{
        text-decoration: none;
        color: white;
    }
    @keyframes nivel-cresce-basico {
        from {
        width: 0%;
        }

        to {
            width: 30%;
        }  
    }
    @keyframes nivel-cresce-intermediario {
        from {
        width: 0%;
        }

        to {
            width: 60%;
        }  
    }
    @keyframes nivel-cresce-avancado {
        from {
        width: 0%;
        }

        to {
            width: 100%;
        }  
    }

    /* Para telas menores que 576px (por exemplo, breakpoint 'sm') */
    @media (max-width: 575.98px) {
        .card-equipe{
            justify-content: center;
        }
        .card-equipe img{
            border-radius: 10px;
            margin: 20px 0;
        }
    }
  
    /* Para telas entre 576px e 991.98px (por exemplo, breakpoint 'md') */
    @media (min-width: 576px) and (max-width: 768px) {
        .card-equipe{
            justify-content: center;
        }
        .card-equipe img{
            border-radius: 10px;
            margin: 20px 0;
            
        }
        .lista{
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
        }
        .caixa-equipe{
            padding: 0 90px;
        }
    }
    @media (min-width: 768px) {

        .lista{
            min-width: 430px;
        }

    }
</style>
