<template>
  <ul class="todo-middle">
      <li class="todo-li" v-for="todo in todos" :key="todo.id">
        <input class="mid-inp1" type="checkbox" v-model="todo.completed">
        <input class="mid-inp2" type="text" v-model="todo.name">
        <button class="delete" @click="destroy(todo.id)"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
      </li>
  </ul>
</template>

<script>
export default {
    name:'Middle',
    props:['todos','deleteTodo'],
    methods: {
      destroy(id){
        this.deleteTodo(id);
      }
    }
}
</script>

<style>
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