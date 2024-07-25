<template>
  <div>
    <h1 :class="classVar">
      Curso vue 3
    </h1>
      <!-- or -->
    <h1 :class="{ 'title': true, 'title-home': isHome}">
      Curso VUE 3
    </h1>

    <p :class="pClass">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde assumenda accusamus commodi, quia corrupti aut id facilis? Repudiandae temporibus odio ipsum non obcaecati corrupti cumque reiciendis eaque minima quaerat.
    </p>

    <p :style="{'color': 'aqua', backgroundColor: 'black'}">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate expedita iure sequi vitae. Suscipit quidem optio commodi consectetur, cupiditate nisi. Minima molestiae similique veritatis, eveniet amet nam esse rerum at.
    </p>

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

    <!-- V-for and V-bind-->

    <div v-for="(obj, index) in todos" :key="obj.id" class="todos-item">
      <img v-if="obj.imgScr" :src="obj.imgScr">
      {{ index }} - {{ obj.title }}
    </div>

    <!-- v-bind:src or :src -->
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
          "completed": false,
          "imgScr": 'https://via.placeholder.com/200',
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          "imgScr": 'https://via.placeholder.com/200',
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
      ],
      classVar: 'title',
      isHome: true,
      pClass: ['text', 'text-home'],
    }
  }
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
  margin-top: 60px;
}
</style>
