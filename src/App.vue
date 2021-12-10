<template>
 <div class="container">
    <div id="app">

      <AddTodo />
      <FilterTodos />
    <Todos />
  </div>
 </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>

/* styles */
body {
  font-family: 'Baloo Bhaijaan 2', cursive;
  line-height: 1.6;
  background-color: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
