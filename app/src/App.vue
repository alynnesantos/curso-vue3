<template>
  <div>
    <h1 class="card">Vue 3</h1>
    <BaseAlert v-if="showAlert" :variant="variant" @close="onClose()">
      {{ text }}
    </BaseAlert>
    <!-- <PAI> -> De cima pra baixo -> PROPS
      <FILHO>
        <NETO>
          -> Debaixo pra cima -> emit-event
        </NETO>
      </FILHO>
    </PAI> -->
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
      text: 'Seu formulário foi enviado com sucesso!',
      showAlert: 'true'
    }
  },

  methods: {
    onClose() {
      this.showAlert = false
      console.log('on close');
    },
  },

  computed: {
  },

  watch: {
  },
}
</script>

<style>
.title {
  color: blue;
  font-size: 30px;
}

.title-home {
  color: red;
  font-size: 30px;
}

.text {
  background-color: rgb(0, 0, 0);
}

.todos-item {
  background: #10791e;
  color: #fff;
  border: 7px solid #cccccc7e;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 15px;
  display: flex;

}

.text-home {
  color: #33ff4e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
