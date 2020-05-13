import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  todos: [
    { id: 1, title: "My First item", completed: false },// Test Item
    { id: 2, title: "My Done item", completed: true },// Test Item
  ]
}

const mutations = {
  ADD_TODO_ITEM (state, todoItem) {
    state.todos.push(todoItem)
  },
  DELETE_TODO_ITEM (state, todoItemId) {
    state.todos = [...state.todos.filter(i => i.id !== todoItemId)];
  },
  UPDATE_TODO_ITEM (state, todoItem) {
    const index = state.todos.findIndex(i => i.id === todoItem.id)
    state.todos.splice(index, 1, todoItem)
    state.todos = [...state.todos]
  }
}

const actions = {
  async addTodoItem ({ commit }, todoItem) {
    commit("ADD_TODO_ITEM", todoItem)
  },
  async deleteTodoItem ({ commit }, todoItem) {
    commit("DELETE_TODO_ITEM", todoItem.id)
  },
  async updateTodoItem ({ commit }, todoItem) {
    commit("UPDATE_TODO_ITEM", todoItem)
  },
}

const getters = {
  getTodosUncompleted () {
    return state.todos.filter(i => i.completed === false).length
  },
  getTodos () {
    return state.todos
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
});
