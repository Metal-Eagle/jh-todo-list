<template>
  <div>
    <div>
      <input
        class="input"
        type="text"
        v-model="title"
      >
      <button
        class="btn"
        type="submit"
        @click="onSubmit"
      >Add to list</button>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      title: ""
    }
  },
  methods: {
    onSubmit () {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$store.dispatch('addTodoItem', newTodo)
        this.title = ""
      }
    }
  }
}
</script>
