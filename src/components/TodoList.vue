<template>
  <div class="item">
    <TodoItem
      class="todoItem"
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem"
export default {
  props: ['todos'],
  components: {
    TodoItem
  }
}
</script>
