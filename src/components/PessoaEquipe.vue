<script>
export default {
    props: {
        imagem: String,
        habilidade1: String,
        nivelhab1: String,
        habilidade2: String,
        nivelhab2: String,
        habilidade3: String,
        nivelhab3: String,
        habilidade4: String,
        nivelhab4: String,
        habilidade5: String,
        nivelhab5: String,
        linkgit: String,
        linklinkedin: String
    },
    mounted() {
        const boxes = document.querySelectorAll(".nivel");

        window.addEventListener('scroll', checkBoxes);

        function checkBoxes() {
            const triggerBottom = window.innerHeight / 5 * 4.9;

            boxes.forEach((box) => {
                const boxTop = box.getBoundingClientRect().top;

                if (boxTop < triggerBottom) {
                    let nivelValor = box.getAttribute("nivel");
                    if (nivelValor === 'avancado') {
                        box.classList.add('avancado');
                    } else if (nivelValor === 'intermediario') {
                        box.classList.add('intermediario');
                    } else if (nivelValor === 'basico') {
                        box.classList.add('basico');
                    }
                }
            });
        }
    }
}
</script>
<template>
    
    <div class="container card-equipe ">
        <div class="container-img">
            <img class="" :src="imagem" alt="">
            <h3>
                <slot></slot>
            </h3>
        </div>
        <div>
            <ul class="habilidades">

                <h3>HABILIDADES:</h3>

                <li>
                    <div class="lista">
                        <p class="p-equipe">{{ habilidade1 }}</p>
                        <div class="box">
                            <div :nivel="nivelhab1" class="nivel primeira"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lista">
                        <p>{{ habilidade2 }}</p>
                        <div class="box">
                            <div :nivel="nivelhab2" class="nivel segunda"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lista">
                        <p>{{ habilidade3 }}</p>
                        <div class="box">
                            <div :nivel="nivelhab3" class="nivel terceira"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lista">
                        <p>{{ habilidade4 }}</p>
                        <div class="box">
                            <div :nivel="nivelhab4" class="nivel quarta"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lista">
                        <p>{{ habilidade5 }}</p>
                        <div class="box">
                            <div :nivel="nivelhab5" class="nivel quinta"></div>
                        </div>
                    </div>
                </li>

                <div class="icons-equipe row gap-1">
                    <a class="col-1 " :href="linklinkedin"><i
                            class="bi bi-linkedin"></i></a>
                    <a class="col-1 mx-3 mx-md-0" :href="linkgit"><i class="bi bi-github"></i></a>
                </div>
            </ul>

        </div>


    </div>
</template>
<style scoped>
p {
    margin: 0;
}

.card-equipe ul {
    margin: 0;
    padding: 0 10px;
}

.container-img {
    width: 205px;
    max-height: 250px;
    display: flex;
    overflow: hidden;
    align-items: center;
    position: relative;

}

.container-img img {
    width: 100%;
}

.container-img h3 {
    position: absolute;
    bottom: 0;
    margin: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.37);


    text-align: center;
}

.card-equipe {
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

.card-equipe li {
    margin: 0 30px;


}

.lista {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 5px 0;

}

.box {
    width: 200px;
    height: 20px;
    border-radius: 15px;
    background-color: var(--cor-cinza);
    overflow: hidden;

}

.icons-equipe {
    justify-content: start;
    font-size: 28px;
}

.basico {
    height: 100%;
    background-color: var(--cor-barra);
    animation: nivel-cresce-basico 1.5s forwards;
}

.intermediario {
    height: 100%;
    background-color: var(--cor-barra);
    animation: nivel-cresce-intermediario 1.5s forwards;
}

.avancado {
    height: 100%;
    background-color: var(--cor-barra);
    animation: nivel-cresce-avancado 1.5s forwards;
}

@media (max-width: 576px) {
    .box {
        width: 150px;
    }


}



/* Para telas menores que 576px (por exemplo, breakpoint 'sm') */
@media (max-width: 767px) {
    .container-img {
        border-radius: 10px;
        margin: 20px 0;
    }

    .icons-equipe {
        justify-content: center;
        font-size: 40px;
    }
    .card-equipe{
        border-radius:20px ;
    }


}

@media (min-width: 767px) and (max-width: 900px) {

    .box {
        width: 180px;
    }

}

@media (max-width: 370px) {}

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
}</style>