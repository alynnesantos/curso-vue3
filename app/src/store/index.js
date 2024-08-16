import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Alynne',
      last_name: 'Santos',
      email: 'algumacoisa@example.com'
    },
    products: [],
    cart: [],
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    }
  },
  actions: {
  },
  getters: {
  },
})