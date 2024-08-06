<template>
  <div>
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

    <br>
    <hr>
    <h2>Aula 07</h2>
    <h1 :class="classVar">
      Curso vue 3
    </h1>
    <!-- or -->
    <h1 :class="{ 'title': true, 'title-home': isHome }">
      Curso VUE 3
    </h1>

    <p :class="pClass">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde assumenda accusamus commodi, quia corrupti
      aut id facilis? Repudiandae temporibus odio ipsum non obcaecati corrupti cumque reiciendis eaque minima quaerat.
    </p>

    <p :style="{ 'color': 'aqua', backgroundColor: 'black' }">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate expedita iure sequi vitae. Suscipit quidem
      optio commodi consectetur, cupiditate nisi. Minima molestiae similique veritatis, eveniet amet nam esse rerum at.
    </p>
    <br>
    <hr>

    <h2>Aula 08</h2>
    <div>Two-way data binding - v-model -> formulários</div>

    <br>
    <div>
      <label>Name</label> <br>
      <input v-model="name" type="text">
      <br>
      {{ name }}
    </div>

    <br>

    <div>
      <label>Sports</label> <br>
      <select v-model="sports">
        <option value="">Escolha</option>
        <option value="futebol">Futebol</option>
        <option value="skate">Skate</option>
        <option value="volei">Vôlei</option>
      </select> <br> {{ sports }}
    </div>

    <br>

    <div>
      <label>Newsletter</label><br>
      <input v-model="newsletter" type="radio" value="Sim"> Sim
      <input v-model="newsletter" type="radio" value="Não"> Não
      <br> {{ newsletter }}
    </div>

    <br>

    <div>
      <label>Contract</label> <br>
      <input v-model="contract" type="checkbox">
      Aceita nossos termos...
      <br> {{ contract }}
    </div>

    <br>

    <div>
      <label>Mark the colors you like most</label> <br>
      <input v-model="colors" value="azul" type="checkbox">
      Azul
      <input v-model="colors" value="amarelo" type="checkbox">
      Amarelo
      <br> {{ colors }}
    </div>

    <br>
    <hr>

    <!-- V-on -->
    <h2>Aula 09</h2>
    <div>
      <br><!-- or @click -->
      <button v-on:click.once="onClick()">Enviar</button>
    </div>
    <br>
    <!-- or -->
    <div @mouseover="onMouseOver()" @mouseout="onMouseOut()">
      Mouse over
    </div>
    <br>

    <form action="https://google.com" @submit.prevent="onSubmit">
      <input type="text" @keyup="onKeyUp">
      <button type="submit">Enviar</button>
    </form>
    <hr>

    <!-- Propriedade computada -->
    <h2>Aula 10</h2>
    <p>{{ fullName }}</p>
    <h2>Todos em aberto</h2>
    <div v-for="todo in incompleteTodos" :key="todo.id">
      {{ todo.title }}
    </div>
    <h2>Todos completas</h2>
    <div v-for="todo in completedTodos" :key="todo.id">
      {{ todo.title }}
    </div>
    <h2>Todos</h2>
    <div v-for="todo in todos" :key="todo.id">
      <input v-model="todo.completed" type="checkbox">
      {{ todo.title }}
    </div>
    <br>
    <hr>
    <!-- Watch -->
    <h2>Aula 11</h2>
    <input type="text" v-model="name">
    <br><br>
    {{ name }}
    <br><br><br>

    <select v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
    <br>
    {{ pageCount }}
    <br><br>
    <input type="text" v-model="user.first_name">
    <br><br>
    <input type="text" v-model="user.last_name">
    <br><br>
    {{ user.first_name }} {{ user.last_name }}

    <br>
    <hr>
    <!-- Ciclo de vida -->
    <h2>Aula 12</h2>
    <h1>Hello World</h1>
    <br>
    <input type="text" v-model="name">
    {{ name }}
    <br>
    <TheHeader v-if="showHeader" />
    <button @click="showHeader = !showHeader">Ativar e desativar header</button>
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
      name: 'Alynne Santos',
      sports: '',
      newsletter: '',
      contract: '',
      colors: [],
      user: {
        first_name: '',
        last_name: '',
      },
      pageCount: 5,
    }
  },

  // beforeUpdate() {
  //   console.log('beforeUpdate', this.name)
  // },
  // updated() {
  //   console.log('updated', this.name)
  // },
  // beforeCreate() {
  //   console.log('beforeCreate');
  //   console.log('Estado:', this.name);
  //   console.log('DOM:', this.$el);
  // },
  // created() {
  //   console.log('created');
  //   console.log('Estado:', this.name);
  //   console.log('DOM:', this.$el);
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  //   console.log('Estado:', this.name);
  //   console.log('DOM:', this.$el);
  // },
  // mounted() {
  //   console.log('mounted');
  //   console.log('Estado:', this.name);
  //   console.log('DOM:', this.$el);
  // },

  methods: {
    onClick() {
      console.log('click');
    },

    onMouseOver() {
      console.log('mouse over');
    },

    onMouseOut() {
      console.log('mouse out');
    },

    onSubmit() {
      console.log('submit');
    },

    onKeyUp() {
      console.log('keyup');
    },

    saveUserName() {
      console.log('Ajax');
      console.log(this.name);
    },

    changePage() {
      console.log(this.pageCount);
    },
  },

  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`
    },
    incompleteTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  },

  watch: {
    name(vl) {
      if (vl.length >= 3) {
        this.saveUserName();
      }
    },
    pageCount() {
      this.changePage();
    },
    user: {
      handler() {
        console.log('user alterado');
      },
      deep: true
    },
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
