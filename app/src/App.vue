<template>
  <div>
    <h1 class="card">Vue 3</h1>
    <BaseCard />
  </div>
</template>
<script>

import BaseCard from '@/components/BaseCard.vue';
export default {
  name: 'App',
  components: {
    BaseCard
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
