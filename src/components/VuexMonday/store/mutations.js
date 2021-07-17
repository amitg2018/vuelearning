export default {
  setTodos(state, todos) {
    return (state.todos = todos);
  },
  newTodo(state, todo) {
    return state.todos.unshift(todo);
  },
  removeTodo(state, id) {
    // return state.todos.splice(0, todo);
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  updateTodo(state, updTodo) {
    const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  },
};
