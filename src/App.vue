<script setup>
import {RouterView} from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <Header class="container">
  </Header>

  <RouterView />

  <Footer />
</template>

<style scoped>

</style>
