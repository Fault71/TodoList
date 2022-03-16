<template>
  <div
    id="app"
    class="clearfix"
  >
    <div class="container clearfix">
      <div class="todo-header">
        <div class="title">todos</div>
      </div>
      <div class="todo-main">
        <TodoListTop
          :todos='todos'
          :addTodo='addTodo'
        />
        <TodoListMiddle
          :todos='todos'
          :deleteTodo='deleteTodo'
          :visibility='visibility'
        />
        <TodoListBottom
          :todos='todos'
          :clearTodo='clearTodo'
          @getVisibility='getVisibility'
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoListTop from './components/TodoListTop.vue';
import TodoListMiddle from './components/TodoListMiddle.vue';
import TodoListBottom from './components/TodoListBottom.vue';

export default {
  name: 'App',

  components: {
    TodoListTop,
    TodoListMiddle,
    TodoListBottom,
  },

  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      visibility: 'all',
    };
  },

  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value));
      },
    },
  },

  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    clearTodo() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },

    getVisibility(status) {
      this.visibility = status;
    },
  },
};
</script>

<style>
  *{
    text-decoration: none;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .clearfix::before,.clearfix::after{
    content: '';
    display: table;
    clear: both;
  }
  #app{
    background-color: gainsboro;
    height: 100%;
  }
  .container{
    width: 550px;
    margin: 20px auto 50px;
    background-color: white;
  }
  .todo-header{
    float: left;
    width: 100%;
  }
  .todo-header .title{
    text-align: center;
    font-size: 35px;
    color: red;
    margin: 20px 0;
  }
  .todo-main{
    float: left;
    width: 100%;
  }
</style>
