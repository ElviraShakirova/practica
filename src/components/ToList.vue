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
        <div v-else class="prak">{{ task.name }}</div>

        <div class="result">
          <button class="delete" @click="deleteMessage(index)">
            <a-icon class="example" type="close-circle" />
          </button>
          <button
            class="execute"
            @click="executeMessage(index)"
            :disabled="(task.editMode, task.complete)">
            <a-icon class="example" type="check-circle" />
          </button>
          <button class="change" @click="changeMessage(index)" :disabled="task.complete">
            <a-icon class="example" type="edit" />
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
  border-width: 2px;
  border-color: rgb(10, 140, 101);
  background: rgb(236, 236, 236);
}
.pole {
  background-color: azure;
  width: 500px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #1389a0;
  border: solid #1389a0;
  padding: 5px;
  border-radius: 10px 0px 0px 10px;
  border-width: 2px 0px 2px 2px;
}
.save {
  border-radius: 0px 10px 10px 0px;
  color: #1389a0;
  border: solid #1389a0;
  text-align: center;
  width: 200px;
  padding: 5px;
  border-width: 2px 2px 2px 2px;
}

.result {
  display: flex;
}
.prak {
  text-align: justify;
  width: 420px;
  font-weight: bold;
  word-wrap: break-word;
  white-space: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stroka {
  width: 540px;
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
}
.changePole {
  width: 420px;
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
  overflow: hidden;
  white-space: nowrap;
}
.delete {
  border-radius: 100px;
  border: 0px solid rgb(236, 236, 236);
}
.execute {
  border-radius: 100px;
  border: 0px solid rgb(236, 236, 236);
}
.change {
  border-radius: 100px;
  border: 0px solid rgb(236, 236, 236);
}
.tasks {
  min-height: 10em;
  display: table-cell;
  vertical-align: middle;
}

.example {
  color: #1389a0;
  font-size: 18px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
}
.clearItems {
  color: #1389a0;
  border: 2px solid #1389a0;
  border-radius: 5px;
  font-size: 20px;
}

.shown {
  background: #a7d9db;
}
</style>
