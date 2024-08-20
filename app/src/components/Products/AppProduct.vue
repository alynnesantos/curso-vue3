<template>
    <div class="card">
        {{ product.name }} - {{ product.price }} <br><br>
        <button @click="addProduct()">+</button>
        <button @click="removeProduct()">-</button>        
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },

    methods: {
        addProduct() {
            this.$store.commit('addProduct', this.product)
        },

        removeProduct() {
            this.$store.commit('removeProduct', this.product.id)
        }
    }
}
</script>

<style>
    .card {
        background: rgb(255, 142, 4);
        border: 1px solid #000000;
        padding: 10px;
        margin-bottom: 5px;
    }
</style>