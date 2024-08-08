<template>
  <div>
    <!-- Componentes slot -->
    <h2>Aula 13 - Componentes slot</h2>
    <div>
      <TheHeader>
        <template v-slot:title>
          Home
        </template>
        <template v-slot:description>
          <p>asdsdasdsadsa</p>
        </template>
        Content do header - menu
      </TheHeader>
    </div>
  </div>

</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {
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
