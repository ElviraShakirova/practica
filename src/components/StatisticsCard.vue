<template>
  <main>
    <div class="day">
      <div>Дата {{ day.Date }}</div>
      <div>Подтверждено {{ day.Confirmed }}</div>
      <div>Смерти {{ day.Deaths }}</div>
      <div>Выздоровело {{ day.Recovered }}</div>
      <div>Выявлено {{ day.Active }}</div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    day: {
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
.day {
  border: 2px solid black;
  border-radius: 10px;
  margin: 8px;
  padding: 5px;
  width: 500px;
  cursor: pointer;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
