<template>
    <div :class="['alert', { 'alert-success': variant === 'success', 'alert-danger': variant === 'danger' }]">
        Seu formulário foi enviado com sucesso!
    </div>
    <br>
    or
    <br><br>
    <div :class="baseClass">
        <slot />
        <button @click="onClick()">
            X
        </button>
    </div>
</template>

<script>
export default {
    // props: [
    //     'variant',
    // ],
    props: {
        variant: {
            type: String,
            default: '',
        },
    },

    computed: {
        baseClass() {
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : ''
            ]
        },
    },

    methods: {
        onClick() {
            this.$emit('close')
            console.log('Clicou');
        }
    }
}
</script>

<style scoped>
.alert {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background: lightgray;
}

.alert-success {
    background: #149c51;
    color: #fff;
}

.alert-danger {
    background: #fd0000;
    color: #fff;
}
</style>