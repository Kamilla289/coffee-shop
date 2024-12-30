import coffeeFactory from "@/CoffeeFactory.js";

const cardStore = {
  state: {
    product: null,
    isLoading: false,
  },

  actions: {
    setCoffeeData({ commit }, data) {
      commit('setCoffeeData', data);
    },
    setCardData({ commit }, data) {
      commit('setCardData', data);
    },
    setGoodsData({ commit }, data) {
      commit('setGoodsData', data);
    },
    fetchProductById({ commit }, productId) {
      return fetch(`http://localhost:3000/CoffeeSection/${productId}`)
        .then(res => res.json())
        .then(data => {
          commit('setSelectedProduct', data);
        });
    },
    setLoading({ commit }, loading) {
      commit('setLoading', loading);
    },
  },

  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
    setCardData(state, data) {
      state.cards = data;
    },
    setGoodsData(state, data) {
      state.goods = data;
    },
    setSelectedProduct(state, product) {
      state.product = product;
    },
    setLoading(state, loading) {
      state.isLoading = loading;
    },
  },

  getters: {
    getCoffeeHero(state) {
      return { cards: state.cards };
    },
    getCoffeeOur(state) {
      return { coffee: state.coffee };
    },
    getCoffeePleasure(state) {
      return { goods: state.goods };
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      }
    },
    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id);
      }
    },
    selectedProduct(state) {
      return state.product;
    },
    isLoading(state) {
      return state.isLoading;
    },
  }
}

export default cardStore;