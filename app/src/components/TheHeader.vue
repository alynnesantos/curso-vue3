<template>
    <header class="header">
        <h1>Header</h1>
    </header>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('resize', this.resize)
    },
    beforeUnmount() {
        console.log('beforeUnmount');
        window.addEventListener('resize', this.resize)
    },
    unmounted() {
        console.log('unmounted');
    },

    methods: {
        resize($evt) {
            console.log($evt);
        }
    }
}
</script>

<style>
.header {
    background-color: #000;
    color: #fff;
}
</style>
