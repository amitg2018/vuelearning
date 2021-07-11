export default {
  // Mutations always run as synchronously - means line by line
  increment(state) {
    state.counter += +1; // same as state.counter = state.counter + 1
  },
  decrement(state) {
    state.counter = state.counter - 1; // same as state.counter = state.counter + 1
  },
  setAuth(state, payload) {
    state.isloggedin = payload.isAuth;
  },

  adding(state) {
    state.counting++; // same as state.counting = state.counting + 1
  },
  removing(state) {
    state.counting--; // same as state.counting = state.counting - 1
  },

  /* =====================================================================
  mutation also take second argument called payload,
  payload will be String, Number, Array, Object and any thing 
  ========================================================================= */
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
