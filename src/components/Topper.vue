<template>
  <div class="todo-topper">
        <button ><font-awesome-icon class="angle" icon="fa-solid fa-angle-down" /></button>
        <input class="top-inp" type="text" placeholder="What needs to be done?" @keyup.enter="add" v-model.trim="item">
    </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
    name:"Topper",
    data() {
      return {
        item:''
      }
    },
    props:['addTodo'],
    methods: {
      add(){
        if (this.item == '') return;
        const newTodo = {id:nanoid(),name:this.item,completed:false};
        this.addTodo(newTodo);
        this.item = '';
      },
    }
}
</script>

<style>
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