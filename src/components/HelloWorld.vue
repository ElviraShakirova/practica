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
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "Id",
    dataIndex: "ID",
    key: "ID",
    width: 80,
  },
  {
    title: "Nominal",
    dataIndex: "Nominal",
    key: "Nominal",
    
  },
  {
    title: "CharCode",
    dataIndex: "CharCode",
    key: "CharCode",
  },
  {
    title: "NumCode",
    dataIndex: "NumCode",
    key: "NumCode",
  },
  {
    title: "Previous",
    dataIndex: "Previous",
    key: "Previous",
  },
  {
    title: "Value",
    dataIndex: "Value",
    key: "Value",
  },
];

export default {
  data() {
    return {
      data: [],
      columns,
    };
  },
  async mounted() {
    const resposnse = await this.axios.get(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );
    const valutes = resposnse.data.Valute;
    this.data = Object.keys(valutes).map((item) => {
      return valutes[item];
    });
  },
};
</script>

<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
