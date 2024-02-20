<script setup>
defineProps(['icone','titulo']);
</script>
<template>
    <div class="minicard">
        <img class="minicard-icon" :src="icone" alt="i" />
        <h5>{{ titulo }}</h5>
        <slot> </slot>
    </div>
</template>
<style scoped>
.minicard{
    margin-bottom: 30px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.233);
    border: rgb(78, 76, 76) solid 2px;
    max-width: 180px;
    overflow: hidden; /* Ocultar conteúdo que ultrapassa as bordas */
}
.minicard-icon{
    width: 50px;
}
h5{
    flex: 0; /* Dá ao h5 um espaço flexível para não ultrapassar os limites do contêiner */
        margin: 1; /* Remove as margens padrão do h5 para garantir um ajuste adequado */
        white-space: nowrap; /* Impede a quebra de texto para a próxima linha */
        overflow: hidden; /* Oculta qualquer texto que ultrapasse o contêiner */
        text-overflow: ellipsis; /* Adiciona reticências (...) ao final do texto que ultrapassa */
}
</style>