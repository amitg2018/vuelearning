import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import vuexModay from "../components/VuexMonday/store";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    vuexModay,
  },
});

export default store;
// export default new Vuex.Store({
//   state:{},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
