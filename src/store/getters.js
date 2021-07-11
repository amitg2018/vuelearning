export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  finalCounting(state) {
    return state.counting * 2;
  },
  anotherCounting(state) {
    return state.counting * 4;
  },
  stringCounter(state) {
    return state.counting + "Clicks";
  },
  normalizeCounter(state, getters) {
    // yahan state call nahi ho raha hai to only underscore (_) ka bhi use ker sakte hai (_, getters) like this
    const finalData = getters.finalCounter;
    if (finalData < 0) {
      return 0;
    }
    if (finalData > 100) {
      return 100;
    }
    return finalData;
  },
  userIsAuthenticated(state) {
    return state.isloggedin;
  },
  allTodos(state) {
    return state.todos;
  },
};
