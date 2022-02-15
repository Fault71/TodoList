<template>
  <div class="todo-topper">
    <button @click="selectAll">
      <font-awesome-icon
        class="angle"
        icon="fa-solid fa-angle-down"
      />
    </button>
    <input
      class="top-inp"
      type="text"
      placeholder="What needs to be done?"
      v-model.trim="item"
      @keyup.enter="add"
    >
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  name: 'TodoListTop',

  props: {
    todos: Array,
    addTodo: Function,
  },

  data() {
    return {
      item: '',
    };
  },

  methods: {
    add() {
      if (this.item === '') return;
      const newTodo = {
        id: nanoid(),
        name: this.item,
        completed: false,
        uneditable: true,
      };
      this.addTodo(newTodo);
      this.item = '';
    },

    selectAll() {
      const i = this.todos.reduce((pre, cur) => {
        if (cur.completed === true) pre += 1;
        return pre;
      }, 0);
      if (i !== this.todos.length) {
        this.todos.forEach((todo) => {
          todo.completed = true;
        });
      } else {
        this.todos.forEach((todo) => {
          todo.completed = false;
        });
      }
    },
  },
};
</script>

<style scoped>
  .todo-topper{
    float: left;
    width: 100%;
    border: 2px  solid;
  }
  .todo-topper button{
    float: left;
    width: 50px;
    height: 80px;
    background-color: white;
    border: none;
  }
  .todo-topper .angle{
    font-size: 20px;
  }
  .todo-topper .top-inp{
    float: right;
    width: 460px;
    height: 60px;
    padding: 10px 20px;
    border: none;
    outline: none;
  }
</style>
