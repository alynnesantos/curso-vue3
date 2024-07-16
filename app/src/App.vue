<template>
  <!-- V-if -->
  <TheHeader v-if="showHeader" />

  <!-- V-show -->
  <div v-show="showName">
    Nome: {{ firstname }} <br>
    Sobrenome: {{ lastname }}
  </div>

  <!-- V-else-if -->
  <div v-if="acessLevel === 'admin'">Usuário Admin</div>
  <div v-else-if="acessLevel === 'marketing'">Usuário Marketing</div>
  <div v-else>Usuário User</div>

  <!-- V-for -->
  <div v-for="(obj, index) in todos" v-bind:key="obj.id" class="todos-item">
    {{index}} - {{ obj.title }}
  </div>

</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {
      showHeader: true,
      firstname: 'Jon',
      lastname: 'Snow',
      showName: false,
      acessLevel: '',
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  }
}
</script>

<style>

.todos-item {
  background: #10791e;
  color: #fff;
  border: 7px solid #cccccc7e;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 15px;
  display: flex;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} 
</style>
