<template>
  <div class="vacations">
    <h1 class="vacations__title">Vacations</h1>
    <ul >
      <li v-for="item in data.objects">
        {{item.name}}
        {{item.vacancies.total}}
        <ul>
          <li v-for="vacancy in item.vacancies.objects">{{vacancy.position}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResources from 'vue-resource';

Vue.use(VueResources);

export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    this.$http.post('/api/vacations').then(response => {
      this.data = response.body;
    }, response => {
      return response;
    });
  }
}
</script>

<style lang="postcss" scoped>


</style>
