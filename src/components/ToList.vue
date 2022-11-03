<template>
  <main>
    <h1>Список задач</h1>
    <div>
      <input class="pole" v-model="message" type="text" placeholder="Напишите задачу" />
      <button class="save" @click="addMessage(index)">Сохранить</button>
    </div>
    <div class="list" v-for="(task, index) in tasks" :key="index">
      <div>
        {{ task }}
      </div>
      <div class="result">
        <button class="delete" @click="deleteMessage(index)">удалить</button>
        <button class="execute" @click="executeMessage()">выполнить</button>
        <button class="change" @click="changeMessage()">изменить</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tasks: [], //// сделать массив обьектов,узнать у Миши как и почему именно обьекты
      message: '',
    };
  },
  methods: {
    addMessage() {
      this.tasks.push(this.message);
    },
    deleteMessage(index) {
      console.log(index);
      this.tasks.splice(index, 1); /// удалить элемент  сколкьок элементов 1
    },
    executeMessage() {},
    changeMessage() {},
  },
};
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
}
.save {
  background-color: #a7d9db;
  color: rgb(17, 63, 87);
  text-align: center;
  width: 200px;
  font-size: 15px;
}
.tasks {
  min-height: 10em;
  display: table-cell;
  vertical-align: middle;
}
</style>
