import axios from 'axios';

const state = {
  todos: []
}
const getters = {
  allTodos: state => state.todos
}
const actions = {

  async fetchTodos({ commit}) {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/todos');
  
    commit('setTodos', responce.data);
  },

  async addTodo({ commit }, title) {
    const responce = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
    
    commit('newTodo', responce.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('removeTodo', id)
  },

  async filterTodos({ commit }, event) {
    // get selected number
    /* eslint-disable no-unused-vars */
    const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
    /* eslint-enable no-unused-vars */
    const responce = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    commit('setTodos', responce.data);
  },

  async updateTodo({ commit }, updTodo) {
    const responce = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
    commit('updateTodo', responce.data);

  }

}
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo:(state, todo) => (state.todos.unshift(todo)),
  removeTodo:(state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  updateTodo:(state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
      
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}