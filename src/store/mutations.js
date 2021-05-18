export default {
  increment(state) {
    state.counter += +1 // same as state.counter = state.counter + 1
  },
  decrement(state) {
    state.counter = state.counter -1 // same as state.counter = state.counter + 1
  },
  setAuth(state, payload) {
    state.isloggedin = payload.isAuth
  },
  
  /* =====================================================================
  mutation also take second argument called payload,
  payload will be String, Number, Array, Object and any thing 
  ========================================================================= */
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  }
}
