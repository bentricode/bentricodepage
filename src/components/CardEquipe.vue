<script setup>
    import PessoaEquipe from '@/components/PessoaEquipe.vue';
</script>
<template>
    <section class="equipe">
        <h1 id="titulo-equipe" class="d-block d-md-none text-light text-center">NOSSA EQUIPE</h1>
        <div class="equipe-edit">
            <img class="d-none d-md-block img-fluid" src="/nossaequipe.png" alt="">
            <div>    
                <PessoaEquipe habilidade1="HTML/CSS/JS" nivelhab1 ="avancado" habilidade2="PHP" nivelhab2="intermediario" habilidade3="React.js/Vue.js" nivelhab3="intermediario" habilidade4="Laravel" nivelhab4="basico" habilidade5="SQL" nivelhab5="intermediario" imagem="/ga2.jpg" linkgit="https://github.com/GabrielHenB" linklinkedin="https://www.linkedin.com/in/gabriel-braz-4a6b06224/">Gabriel</PessoaEquipe>
                <PessoaEquipe habilidade1="HTML/CSS/JS" nivelhab1 ="avancado" habilidade2="Java" nivelhab2="intermediario" habilidade3="React.js/Vue.js" nivelhab3="basico" habilidade4="Figma" nivelhab4="intermediario" habilidade5="Spring Boot" nivelhab5="basico" imagem="/marlon.jpg" linkgit="https://github.com/marlon-bento" linklinkedin="https://www.linkedin.com/in/marlon-bento-461ba755/">Márlon</PessoaEquipe>             
            </div>
        </div>
    </section>
</template>
<style scoped>

        #titulo-equipe{
            color: var(--cor-cinza);
            opacity: 28%;
            font-weight: bold;
            letter-spacing: 6px;
        }
        p{
            margin: 0;
        }
        .equipe{
            background-color: var(--cor-blue);
            padding: 60px 20px;

        }
        .equipe-edit{
        
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            
            

        }
        
   
        @media (max-width: 576px){
            .box{
                width: 150px;
            }
            .card-equipe{
                border-radius: 20px;
            }
        }
                /* Para telas menores que 576px (por exemplo, breakpoint 'sm') */
        @media (min-width: 576px) and (max-width: 767px) {
            .equipe-edit{
                padding: 0 70px;
            }
        }
  
            /* Para telas menores que 576px (por exemplo, breakpoint 'sm') */
        @media (max-width: 767px) {
            .container-img{
                border-radius: 10px;
                margin: 20px 0;
            }
            .icons-equipe{
                justify-content: center;
                font-size: 40px;
            }
            h2{
                font-size: 20px;
            }
            h3{
                font-size: 18px;
            }
            p{
                font-size: 12px;
            }

        }
        @keyframes nivel-cresce-basico {
            from {
                opacity: 10%;
                width: 0%;
            }

            to {
                opacity: 100%;
                width: 30%;
            } 
        }
        @keyframes nivel-cresce-intermediario {
            from {
                opacity: 10%;
                width: 0%;
            }

            to {
                opacity: 100%;
                width: 60%;
            } 
        }
        @keyframes nivel-cresce-avancado {
            from {
                opacity: 10%;
                width: 0%;
            }

            to {
                opacity: 100%;
                width: 100%;
            }  
        }
</style>