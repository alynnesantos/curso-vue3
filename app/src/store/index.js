import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Alynne',
      last_name: 'Santos',
      email: 'algumacoisa@example.com'
    },
    products: [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ],
    cart: [],
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },
    addProduct(state, data) {
      state.cart.push(data)
    },
    removeProduct(state, id) {
      const idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx, 1);
    }
  },
  actions: {
  },
  getters: {
  },
})
