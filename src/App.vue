<template>

  <div id="app" class="clearfix">
    <div class="container clearfix">
      <div class="todo-header">
        <div class="title">todos</div>
      </div>
      <div class="todo-main">
        <Topper :addTodo='addTodo'></Topper>
        <Middle :todos='todos' :deleteTodo='deleteTodo'></Middle>
        <Bottom :todos='todos' :clearTodo='clearTodo' ></Bottom>
      </div>
    </div>
  </div>
</template>

<script>
import Topper from './components/Topper.vue'
import Middle from './components/Middle.vue'
import Bottom from './components/Bottom.vue'

export default {
  name: 'App',
  components: {
    Topper,Middle,Bottom
  },
  data() {
      return {
        todos:[
          {id:'001',name:'study',completed:true},
          {id:'002',name:'study',completed:true},
          {id:'003',name:'study',completed:false},
          {id:'004',name:'study',completed:false}
        ]
      }
  },
  methods: {
    addTodo(todo){
      this.todos.unshift(todo);
    },
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id != id; 
      });
    },
    clearTodo(){
      this.todos = this.todos.filter((todo)=>{
          return !todo.completed;
      });
    },
  }
}
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
