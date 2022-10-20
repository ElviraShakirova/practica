<template>
  <div class="container">
    <a-table :columns="columns" :data-source="data">
      <a slot="Name" slot-scope="text">{{ text }}</a>
      <a slot="ID" slot-scope="text">{{ text }}</a>
      <a slot="Nominal" slot-scope="text">{{ text }}</a>
      <a slot="CharCode" slot-scope="text">{{ text }}</a>
      <a slot="NumCode" slot-scope="text">{{ text }}</a>
      <a slot="Previous" slot-scope="text">{{ text }}</a>
      <a slot="Value" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { COLUMNS } from '@/tools/constants.js';

export default {
  data() {
    return {
      data: [],
      columns: COLUMNS,
    };
  },
  async mounted() {
    const resposnse = await this.axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
    const valutes = resposnse.data.Valute;
    this.data = Object.keys(valutes).map((item) => {
      return valutes[item];
    });
  },
  computed: {
    ...mapState('initState', ['variable']), // 'variable'
  },
  methods: {
    ...mapActions('initState', ['request']), // 'request'
  },
};
</script>

<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
