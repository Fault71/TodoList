<template>
  <ul class="todo-middle">
    <li
      class="todo-li"
      v-for="todo in filterData"
      :key="todo.id"
    >
      <input
        class="mid-inp1"
        type="checkbox"
        v-model="todo.completed"
      >
      <input
        class="mid-inp2"
        type="text"
        v-model="todo.name"
        :readonly="todo.uneditable"
        @dblclick="toEdit(todo.id)"
        @blur="finishEditing(todo.id)"
      >
      <button
        class="delete"
        @click="destroy(todo.id)"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoListMiddle',

  props: {
    todos: Array,
    deleteTodo: Function,
    visibility: String,
  },

  computed: {
    filterData() {
      const filter = {
        all(todos) {
          return todos;
        },
        active(todos) {
          return todos.filter((todo) => !todo.completed);
        },
        completed(todos) {
          return todos.filter((todo) => todo.completed);
        },
      };
      return filter[this.visibility](this.todos);
    },
  },

  methods: {
    destroy(id) {
      this.deleteTodo(id);
    },

    toEdit(id) {
      this.todos.forEach((todo) => {
        // eslint-disable-next-line no-param-reassign
        if (todo.id === id) todo.uneditable = false;
      });
    },

    finishEditing(id) {
      this.todos.forEach((todo) => {
        // eslint-disable-next-line no-param-reassign
        if (todo.id === id) todo.uneditable = true;
      });
    },
  },
};
</script>

<style scoped>
  .todo-middle{
    float: left;
    width: 100%;
  }
  .todo-li{
    float: left;
    width: 100%;
    border: 1px solid;
    color: black;
    position: relative;
  }
  .mid-inp1{
    float: left;
    width: 50px;
    height: 30px;
    border: none;
    outline: none;
  }
  .mid-inp2{
    float: right;
    width: 460px;
    height: 30px;
  }
  .delete{
    display: none;
    width: 15px;
    height: 15px;
    position: absolute;
    z-index: 2;
    right:10px;
    top:10px
  }
  .todo-li:hover .delete{
    display: block;
  }
</style>
