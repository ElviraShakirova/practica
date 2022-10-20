<template>
  <div class="CoronaStatistics">
    <h1>Статистика</h1>

    <div v-if="loading">идет загрузка</div>

    <div class="info" v-else>
      <div v-if="!days.length">нет данных</div>
      <StatisticsCard v-else v-for="day in days" :key="day.Date" :day="day" />
    </div>
  </div>
</template>

<script>
import StatisticsCard from '@/components/StatisticsCard.vue';

export default {
  components: {
    StatisticsCard,
  },
  data() {
    return {
      days: [],
      loading: true,
      info: false,
    };
  },
  async mounted() {
    const country = this.$route.params.country;
    const resposnse = await this.axios.get(`https://api.covid19api.com/total/country/${country}`);
    this.days = resposnse.data || [];
    this.loading = false;
    this.unfo = true;
  },
};
</script>

<style></style>
