<template>
    <div v-if="mostrarComponente" class="overlay" @click="fecharComponente">
        <transition name="slide-fade">

            <div class="componente" @click.stop>
                <h3 class="text-center bold">Enviar e-mail</h3>
                <label class="mb-2 bold" for="nome-completo">Nome completo</label>
                <div class="input-group mb-3 box-input">
                    <input id="nome-completo" type="text" class="form-control input" placeholder="Digite seu nome"
                        aria-label="Digite seu nome" aria-describedby="basic-addon2">

                </div>

                <label class="mb-2 bold" for="e-mail">E-mail</label>
                <div class="input-group mb-3 box-input">
                    <input id="e-mail" type="email" class="form-control input" placeholder="Digite seu e-mail"
                        aria-label="Digite seu e-mail" aria-describedby="basic-addon2">
                </div>

                <label class="mb-2 bold" for="e-mail">Data desejada</label>
                <div class="input-group mb-3 box-input">
                    <input id="e-mail" type="date" class="form-control input" placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                </div>

                <div class="input-group mb-3 box-input">
                    <input id="e-mail" type="search" class="form-control input" placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                </div>


            </div>
        </transition>
    </div>
</template>
  
<script>
export default {
    props: {
        mostrarComponente: Boolean,
    },
    methods: {
        fecharComponente() {
            this.$emit('fechar');
        },
    },
};
</script>
  
<style>
label {
    color: var(--cor-cinza);
}

.input {
    max-width: 600px;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.836);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
}

.componente {
    background-color: var(--cor-blue);
    width: 50%;
    padding: 20px;
    border-radius: 5px;
    transition: opacity 0.5s, transform 0.5s;
}



.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
