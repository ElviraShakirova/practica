<template>
  <main>
    <CountryCard v-for="country in countries" :key="country.ISO2" :country="country" />
  </main>
</template>

<script>
import CountryCard from '@/components/CountyCard.vue';

export default {
  components: {
    CountryCard,
  },

  data() {
    return {
      countries: [],
    };
  },
  async mounted() {
    this.countries = await this.$store.dispatch('getCountries');
  },
};
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
