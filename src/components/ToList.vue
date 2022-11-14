<template>
  <main>
    <h1>Список задач</h1>
    <div class="box">
      <div class="stroka">
        <input class="pole" v-model="message" type="text" placeholder="Напишите задачу" />
        <button class="save" @click="addMessage()" :disabled="!message.length">Сохранить</button>
      </div>

      <div v-for="(task, index) in tasks" :class="!task.complete ? 'list' : 'isShow'" :key="index">
        <input v-if="task.editMode" v-model="task.name" class="changePole" type="text" />
        <div v-else>{{ task.name }}</div>

        <div class="result">
          <button class="delete" @click="deleteMessage(index)">Удалить</button>
          <button class="execute" @click="executeMessage(index)">Выполнить</button>
          <button class="change" @click="changeMessage(index)">
            {{ task.saveTask ? 'Сохранить' : 'Редактировать' }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      message: '',
    };
  },

  methods: {
    addMessage() {
      const task = {
        name: this.message,
        complete: false,
        editMode: false,
        saveTask: false,
      };
      this.tasks.push(task);
      this.message = '';
    },
    deleteMessage(index) {
      this.tasks.splice(index, 1); /// удалить элемент  сколкьок элементов 1
    },
    executeMessage(index) {
      this.tasks[index].complete = !this.tasks[index].complete;
    },
    changeMessage(index) {
      this.tasks[index].editMode = !this.tasks[index].editMode;
      this.tasks[index].saveTask = !this.tasks[index].saveTask;
    },
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
.box {
  width: 600px;
  border-style: solid;
  border-width: 5px;
  border-color: rgb(7, 7, 80);
}
.pole {
  width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.stroka {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 20px;
  color: #000;
  margin-top: 10px;
  margin-bottom: 10px;
}
.save {
  background-color: #a7d9db;
  color: rgb(17, 63, 87);
  text-align: center;
  width: 200px;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.tasks {
  min-height: 10em;
  display: table-cell;
  vertical-align: middle;
}

.isShow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 20px;
  color: yellowgreen;
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: line-through;
}
</style>
