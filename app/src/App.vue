<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/users/10">Users</router-link>
  </nav>
  <button @click="updateUser()">
    Atualizar perfil
  </button>
  <router-view />

</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: 'Alynne',
        last_name: 'Nunes',
        email: 'algumacoisa@vue.com'
      }
      this.$store.commit('storeUser', newUser)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
