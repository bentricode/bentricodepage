<script setup>
    import PessoaEquipe from '@/components/PessoaEquipe.vue';
</script>
<template>
    <section class="equipe">
        <h1 id="titulo-equipe" class="d-block d-md-none text-light text-center">NOSSA EQUIPE</h1>
        <div class="equipe-edit">
            <img class="d-none d-md-block img-fluid" src="/nossaequipe.png" alt="">
            <div>    
                <PessoaEquipe habilidade1="HTML/CSS/JS" nivelhab1 ="avancado" habilidade2="PHP" nivelhab2="intermediario" habilidade3="React.js/Vue.js" nivelhab3="intermediario" habilidade4="Laravel" nivelhab4="basico" habilidade5="SQL" nivelhab5="intermediario" imagem="/ga2.jpg">Gabriel</PessoaEquipe>
                <PessoaEquipe habilidade1="HTML/CSS/JS" nivelhab1 ="avancado" habilidade2="Java" nivelhab2="intermediario" habilidade3="React.js/Vue.js" nivelhab3="basico" habilidade4="Figma" nivelhab4="intermediario" habilidade5="Spring Boot" nivelhab5="basico" imagem="/marlon.jpg">Márlon</PessoaEquipe>             
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
        .card-equipe ul{
            margin: 0;
            padding: 0 10px;
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
        .container-img{
            width: 205px;
            max-height: 250px;
            display: flex;
            overflow: hidden;
            align-items: center;
            position: relative;

        }
        .container-img img{
            width: 100%;
        }
        .container-img h3{
            position: absolute;
            bottom: 0;
            margin: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.37);
            
            
            text-align: center;
        }
        .card-equipe{
            display: flex;
            gap: 7px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
            background: #6d41b51f;
            border-radius: 0 20px 20px 0;   
            padding: 0;
            
            
        }
        .card-equipe li{
            margin: 0 30px;
            

        }
        .lista{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            margin: 5px 0;
            
        }
        .box{
            width: 200px;
            height: 20px;
            border-radius: 15px;
            background-color: var(--cor-cinza);
            overflow: hidden;
            
        }
        .icons-equipe{
            justify-content: start;
            font-size: 28px;
        }
        .basico{
            height: 100%;
            background-color: var(--cor-barra);
            animation: nivel-cresce-basico 1.5s forwards;
        }
        .intermediario{
            height: 100%;
            background-color: var(--cor-barra);
            animation: nivel-cresce-intermediario 1.5s forwards;
        }
        .avancado{
            height: 100%;
            background-color: var(--cor-barra);
            animation: nivel-cresce-avancado 1.5s forwards;
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