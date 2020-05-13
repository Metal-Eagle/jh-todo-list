<template>
  <div class="home">
    <main>
      <h1 class="text">
        Todo list <span class="chip">{{getTodosUncompleted}}</span>
      </h1>
      <TodoList
        :todos="todos"
        v-if="todos.length"
      />
      <p
        class="text"
        v-else
      >Add to list
      </p>
      <AddTodo />
    </main>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"
import AddTodo from "@/components/AddTodo"
import { mapGetters } from 'vuex'


// @ is an alias to /src
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getTodos', 'getTodosUncompleted']),
    todos () {
      return this.getTodos
    },
  },
  components: {
    TodoList, AddTodo
  }
};
</script>
