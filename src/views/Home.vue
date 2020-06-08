<template>
  <div class="home">
    <main>
      <h3 class="text-center">
        Todo list <span class="badge badge-pill badge-success">{{getTodosUncompleted}}</span>
      </h3>
      <TodoList
        :todos="todos"
        v-if="todos.length"
      />
      <p
        class="text-center"
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
