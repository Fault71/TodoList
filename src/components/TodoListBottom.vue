/* eslint-disable space-before-blocks */
<template>
  <div
    class="todo-bottom"
    v-show="total"
  >
    <div class="count">{{leftTodo}} items left</div>
    <div class="status">
      <button
        class="unselected"
        @click="allButton"
      >
        All
      </button>
      <button
        class="unselected"
        @click="activeButton"
      >
        Active
      </button>
      <button
        class="unselected"
        @click="completedButton"
      >
        Completed
      </button>
    </div>
    <button
      class="clear"
      v-show="clearDisplay()"
      @click="clearCompleted"
    >
      Clear completed
    </button>
  </div>
</template>

<script>

export default {
  name: 'TodoListBottom',

  props: {
    todos: Array,
    clearTodo: Function,
  },

  computed: {
    total() {
      return this.todos.length;
    },

    leftTodo() {
      const lefts = this.todos.reduce((pre, cur) => {
        if (cur.completed !== true) pre += 1;
        return pre;
      }, 0);
      return lefts;
    },
  },

  methods: {
    clearCompleted() {
      this.clearTodo();
    },

    allButton() {
      this.$emit('getVisibility', 'all');
    },

    activeButton() {
      this.$emit('getVisibility', 'active');
    },

    completedButton() {
      this.$emit('getVisibility', 'completed');
    },

    clearDisplay() {
      if (this.todos.length - this.leftTodo <= 0) return false;
      return true;
    },
  },
};
</script>

<style scoped>
  .todo-bottom{
    width: 100%;
    float: left;
    border: 1px solid;
  }
  .count{
    float: left;
    height: 50px;
    line-height: 50px;
    padding-right: 100px;
  }
  .status{
    float: left;
    height: 50px;
  }
  .status button{
    margin: 17px 10px 5px 10px;
    background-color: white;
  }
  /* .selected{
    border:1px solid black
  } */
  .unselected{
    border: none;
  }
  .unselected:hover{
    border-bottom: 1px grey solid;
  }
  .clear{
    float: right;
    height: 50px;
    background-color: white;
    border: none;
  }
  .clear:hover{
    color: red;
  }
</style>
