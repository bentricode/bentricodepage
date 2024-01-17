<script setup>
import {ref} from 'vue'

const dados = ref({});

</script>

<template>
<h2 class="text-end text-light px-4">X</h2>
<form class="o-form row g-3">
  <div class="col-md-6">
    <label for="inputEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail">
  </div>
  <div class="col-md-6">
    <label for="inputName" class="form-label">Nome</label>
    <input type="text" class="form-control" id="inputName">
  </div>
  <div class="col-12">
    <label for="inputTel" class="form-label">Telefone</label>
    <input type="text" class="form-control" id="inputTel">
  </div>
  <div class="col-12">
    <label for="inputCompany" class="form-label">Empresa</label>
    <input type="text" class="form-control" id="inputCompany" placeholder="Empresa">
  </div>
  <div class="col-md-6">
    <label for="inputWorkers" class="form-label">Número de Funcionários</label>
    <input type="number" class="form-control" id="inputWorkers">
  </div>
  <div class="col-md-4">
    <label for="inputReason" class="form-label">Motivo do Contato</label>
    <select id="inputReason" class="form-select">
      <option selected>Selecione</option>
      <option>Conhecer os serviços da Bentricode</option>
      <option value="">Contratar seviços da Bentricode</option>
      <option value="">Requisitar informações da Bentricode</option>
      <option value="">Conhecer vagas e oportunidades na Bentricode</option>
      <option value="">Outros</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <label for="inputTextao">Como a Bentricode pode te ajudar?</label>
    <textarea class="form-control" rows="3" id="inputTextao"></textarea>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>
</template>

<style scoped>
.o-form{
    color: white;
    margin: 10px;
}
</style>