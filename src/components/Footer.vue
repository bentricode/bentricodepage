<template>
    <!-- Footer inicio -->
    <footer class="container-fluid">
        <div class="row gap-4">
            <div class="col-12 col-md">
                <div class="d-flex flex-column gap-3">
                    <div>
                        <span class="i-footer">
                        <i class="bi bi-geo-alt"></i>
                        </span>
                        <p class="d-inline ms-2">Remoto</p>
                    </div>
                    <div>
                        <span class="i-footer">
                            <i class="bi bi-envelope-fill"></i>
                        </span>
                        <a href="mailto:bentrielcode@gmail.com" class="d-inline ms-2 text-light linque">bentrielcode@gmail.com</a>
                    </div>
                    <div>
                        <span class="i-footer">
                            <i class="bi bi-github"></i>
                        </span>
                        <a href="https://github.com/bentricode" class="d-inline ms-2 text-light linque">https://github.com/bentricode</a>
                    </div>
                    
                    
                </div>
            </div>
            <div class="col-12 col-md">
                <h4>Sobre a BentriCode</h4>
                <p id="flairtext">A BentriCode é uma equipe de desenvolvedores apaixonados por criar experiências excepcionais na web. 
                    Com uma mistura de habilidades front-end e back-end, estamos prontos para enfrentar desafios e entregar
                     soluções de alta qualidade.</p>
            </div>
        </div>
    </footer>
    <!-- Footer final -->
</template>
<style scoped>
footer{
    background-color: var(--cor-header);
    padding: 40px 20px;
}
.i-footer{
    background-color: rgb(32, 32, 32);
    padding: 6px 10px;
    border-radius: 100%;
    font-size: 24px;
}
.linque{
    text-decoration: none;
}

#flairtext{
    color: var(--cor-cinza);
    font-size: 10pt;
}
</style>