<template>
    <div class="card">
        (SCOPED)
        <br><br>
        Adicionar o scoped, no style do componente, faz a classe ser utilizada apenas pelo componente. Sendo assim, não interefere no uso da classe com o mesmo nome em outro uso.
    </div>
</template>

<style scoped>
.card {
    background: blueviolet;
    padding: 10px;
    border-radius: 10px;
    color: white;
}
</style>