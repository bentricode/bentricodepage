<template>
    <img class="rotating-element" src="/Udao.png" alt="">
</template>
<style scoped>
.rotating-element {
            width: 100px;
            height: 100px;

            animation: rotate 3s infinite linear;
        }

        @keyframes rotate {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(360deg);
            }
        }
</style>