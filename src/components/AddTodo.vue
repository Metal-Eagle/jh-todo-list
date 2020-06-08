<template>
  <div class="row mb-3">

    <input
      class="input-group input-group-sm col-8"
      type="text"
      v-model="title"
    >
    <div class="col-2"></div>
    <button
      class="btn btn-primary col-2"
      type="button"
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
