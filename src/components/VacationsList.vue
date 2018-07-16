<template>
  <div class="vacations">
    <h1 class="vacations__title">Vacations</h1>
    <ul >
      <li v-for="item in data" v-if="item.status !== 0" v-bind:key="item.id">
        <ul>
          <li v-for="vacancy in item.vacancies.objects" v-bind:key="vacancy.id">{{vacancy.position}} {{item.name}}</li>
        </ul>
      </li>
    </ul>
    <p >{{ totalVacanciesSum }}</p>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResources from 'vue-resource';

Vue.use(VueResources);

export default {
  data() {
    return {
      data: [],
      totalVacanciesList: [],
      totalVacanciesSum: 0,
    }
  },
  computed: {

  },
  created() {

    this.$http.post('/api/vacations').then(response => {
      this.data = response.body;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      this.totalVacanciesList = this.data.map((data)=> {
        return data.vacancies.total;
      });
      this.totalVacanciesSum = this.totalVacanciesList.reduce(reducer);

    }, response => {
      return response;
    });
  }
}
</script>

<style lang="postcss" scoped>


</style>
