<template>
  <div>
    <h1 class="card">Vue 3</h1>
    <BaseAlert 
    :variant="variant">
      {{ text }}
    </BaseAlert>
  </div>
</template>
<script>

import BaseAlert from '@/components/BaseAlert.vue';
export default {
  name: 'App',
  components: {
    BaseAlert
  },
  data() {
    return {
      variant: 'success',
      text: 'Seu formulário foi enviado com sucesso!'
    }
  },

  methods: {
  },

  computed: {
  },

  watch: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
