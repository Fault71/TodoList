<template>
    <div class="todo-bottom" v-show="total">
        <div class="count">{{leftTodo}} items left</div>
        <div class="status">
            <button class="all">All</button>
            <button class="Active">Active</button>
            <button class="Completed">Completed</button>
        </div>
        <button class="clear" @click="clearCompleted">Clear completed</button>
    </div>
</template>

<script>
export default {
    name:'Bottom',
    props:['todos','clearTodo'],
    computed:{
      total(){
        return this.todos.length;
      },
      leftTodo(){
        let i = 0;
        this.todos.forEach(todo => {
          if(todo.completed != true) i++;
        });
        return i;
      }
    },
    methods:{ 
      clearCompleted(){
        this.clearTodo();
      }
    },
}
</script>

<style>
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
    border: none;
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