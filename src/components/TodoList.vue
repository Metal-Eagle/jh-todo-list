<template>
  <div>
    <ul>
      <TodoItem
        class="todoItem"
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
      />
    </ul>
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
