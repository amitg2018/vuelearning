export default {
  incrementAction (context) {
    setTimeout(function(){
      context.commit('increment')
      alert('Hi I am trigger')
    },2000)
    
  },
  increaseAction (context, payload) {
    context.commit('increase', payload)
  },
  addingAction ({commit}) {
    commit('adding')
  },
  removingAction ({commit}) {
    commit('removing')
  },

  login(context) {
    context.commit('setAuth', {isAuth: true})
  },
  logout(context) {
    context.commit('setAuth', {isAuth: false})
  }
}

