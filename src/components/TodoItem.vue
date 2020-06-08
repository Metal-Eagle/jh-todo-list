<template>
  <div class="row">
    <div class="col-10">

      <span :class="{completed: todo.completed}">
        <input
          v-model="todo.completed"
          class="checkbox"
          type="checkbox"
          @change="updateTodo(todo)"
        >
        {{todo.title}}
      </span>
    </div>

    <button
      class="btn btn-secondary mb-3 col-2"
      @click="removeTodo(todo)"
    > Remove</button>

  </div>

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
