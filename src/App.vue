<template>
  <div id="app">
    <VacationsList />
  </div>
</template>

<script>
import VacationsList from './components/VacationsList.vue';

export default {
  name: 'app',
  components: {
    VacationsList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
