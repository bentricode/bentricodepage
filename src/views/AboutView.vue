<template>
  <main class="container main">
  <div class="about">
    <h1>Alguns ditados importantes para a BentriCode:</h1>
    <ul class="acertainspecificlist">
      <li>"Existem milhões de daos, mas todos levam ao topo" - Kai, Yang. Martial Peak</li>
      <li>"Every journey has its final day, don't rush" - Zhongli. Genshin Impact</li>
      <li>"Se continuar ai n sei" - Marlon, 2019</li>
      <li>"Esse é só pra ter um número par de ditados" - Gabriel, 2023</li>
    </ul>
  </div></main>
</template>

<style scoped>
.acertainspecificlist{
  list-style: none;
  display: block;
}
.acertainspecificlist li{
  margin-top: 20px;

}
.about{
  background-color: white;

}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
