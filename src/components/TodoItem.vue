<template>
  <li>
    <span :class="{completed: todo.completed}">
      <input
        v-model="todo.completed"
        class="checkbox"
        type="checkbox"
        @change="updateTodo(todo)"
      >
      {{todo.title}}
    </span>
    <button
      class="btn"
      @click="removeTodo(todo)"
    > Remove</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
  },
  methods: {
    ...mapActions(['updateTodoItem', 'deleteTodoItem']),
    updateTodo (todo) {
      this.updateTodoItem(todo)
    },
    removeTodo (todo) {
      this.deleteTodoItem(todo)
    }
  },
}
</script>
