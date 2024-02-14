<template>
    <div class="overlay" @click="fecharComponente">
        <div class="componente" @click.stop>

            <h2 class="text-center text-light px-4">Contate-nos</h2>
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

        </div>
    </div>
</template>
  
<script>
export default {
    props: {
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
}
</style>
