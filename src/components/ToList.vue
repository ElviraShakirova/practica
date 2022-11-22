<template>
  <main>
    <h1>Список задач</h1>
    <div class="box">
      <div class="stroka magnitude">
        <input
          class="pole"
          v-model="message"
          type="text"
          placeholder="Напишите задачу"
          v-on:keyup.enter="addMessage" />
        <button class="save" @click="addMessage()">Сохранить</button>
      </div>

      <div
        v-for="(task, index) in tasks"
        :class="`list magnitude${task.complete ? ' shown' : ''}`"
        :key="index">
        <input v-if="task.editMode" v-model="task.name" class="changePole" type="text" />
        <div v-else>{{ task.name }}</div>

        <div class="result">
          <button class="delete" @click="deleteMessage(index)">
            <a-icon type="close" />
          </button>
          <button
            class="execute"
            @click="executeMessage(index)"
            :disabled="(task.editMode, task.complete)">
            {{ task.complete ? 'svg' : 'Выполнить' }}
          </button>
          <button class="change" @click="changeMessage(index)" :disabled="task.complete">
            {{ task.editMode ? 'Сохранить' : 'Редактировать' }}
          </button>
        </div>
      </div>
      <button class="clearItems magnitude" @click="clearMessage()">Удалить все</button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      message: '',
      itemKey: 'tasks',
    };
  },

  methods: {
    setStorage() {
      localStorage.setItem(this.itemKey, JSON.stringify(this.tasks));
    },
    removeStorage() {
      localStorage.removeItem(this.itemKey);
    },
    addMessage() {
      if (!this.message.length) return;
      const task = {
        name: this.message,
        complete: false,
        editMode: false,
      };

      this.tasks.push(task);
      this.message = '';
      this.setStorage();
    },
    deleteMessage(index) {
      this.tasks.splice(index, 1);
      this.setStorage();
    },
    executeMessage(index) {
      this.tasks[index].complete = !this.tasks[index].complete;
      const [item] = this.tasks.splice(index, 1);
      this.tasks.push(item);
      this.setStorage();
    },
    changeMessage(index) {
      this.tasks[index].editMode = !this.tasks[index].editMode;
      if (!this.tasks[index].editMode) {
        this.setStorage();
      }
    },
    clearMessage() {
      this.tasks.splice(this.tasks);
      this.removeStorage();
    },
  },
  mounted() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
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
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
}
.magnitude {
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
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

.shown {
  background: #a7d9db;
}
</style>
