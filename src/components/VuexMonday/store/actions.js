import axios from "axios";
export default {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    // console.log(response.data);
    commit("setTodos", response.data);
  },
};
