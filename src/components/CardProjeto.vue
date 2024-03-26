<script setup>
import { defineProps} from 'vue';
//const props = defineProps(['source']);
const props = defineProps({
    source: {
        type: String,
        default(){
            return '#';
        },
        required: true,
    }
});
//Depois possivelmente deixar passar classes
</script>
<template>
    <article class="card-art col-12 col-md-6 mb-4">
        <div class="box-q text-center">
            <img :src="source" class="card-imagem" alt="Um projeto bem interessante" />
            <p class="card-text-z">
                <slot></slot>
            </p>
        </div>
    </article>
</template>
<style scoped>
.card-art{
    
}
.card-art:hover{
    transform: scale(1.12);
    transition: all 0.5s;
}
.card-text-z{
    position: absolute;
    display: block;
    bottom: 20px;
    left: 50%;
    z-index: 20;
    background-color: rgba(10,10,10,0.6);
    border: solid 2px white;
    border-radius: 6px;
    max-width: 100%;
    padding: 2px 10px;
    margin: 0 auto;
    text-align: center;
    transform: translate(-50%, -50%);
}
.card-imagem{
    object-fit: cover;
    width: 640px;
    height: 500px;
    max-width: 100%;
    border-radius: 40px;
}
.box-q{
    position: relative;
}
</style>