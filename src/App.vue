<template>
  <div id="app">
    <div>
      <header>
        <div class="click">
          <button :class="isActive('')" @click="navigate('/')">Курс валют</button>
          <button :class="isActive('countries')" @click="navigate('/countries')">
            Список стран
          </button>
          <button :class="isActive('list')" @click="navigate('/list')">Список дел</button>
        </div>
      </header>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  computed: {},
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    isActive(path) {
      console.log(path);
      return this.$route.path.split('/')[1] === path ? 'active' : '';
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
}
button {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 33%;
  cursor: pointer;
}
.active {
  background-color: red;
}
</style>
