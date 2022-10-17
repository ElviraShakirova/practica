<template>

   <router-link class="card" :to="`/countries/${country.ISO2}`" > 
    <div>{{ country.Country }}</div>
    <div>{{ country.Slug }}</div>
    <div>{{ country.ISO2 }}</div>
  </router-link>
 
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.card {
  border: 1px solid black;
  border-radius: 5px;
  margin: 8px;
  padding: 8px;
  width: 240px;
  cursor: pointer;
}
</style>
