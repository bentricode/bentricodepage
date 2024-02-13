<script setup>

</script>
<template>
    <button @click="toggleFaleconosco" class="botao bold"><slot></slot></button>

    <faleconosco :mostrarComponente="mostrarFaleconosco" @fechar="fecharFaleconosco" />
</template>
<style scoped>
    .botao{
        color: var(--cor-blue);
    }
</style>

<script>
    import Faleconosco from './Faleconosco.vue';

    export default {
    components: {
        Faleconosco,
    },
    data() {
        return {
        mostrarFaleconosco: false,
        };
    },
    methods: {
        toggleFaleconosco() {
        this.mostrarFaleconosco = !this.mostrarFaleconosco;
        },
        fecharFaleconosco() {
        this.mostrarFaleconosco = false;
        },
    },
    };
</script>