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
};
