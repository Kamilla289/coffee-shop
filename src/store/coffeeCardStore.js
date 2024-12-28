import coffeeFactory from "@/CoffeeFactory.js";

const cardStore = {
  state: {
    cards: [
      {
        id: 0,
        image: "coffee-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: 1,
        image: "coffee-2.jpg",
        title: "Presto Coffee Beans 1kg",
        price: 15.99,
      },
      {
        id: 2,
        image: "coffee-3.jpg",
        title: "AROMISTICO Coffee 1kg",
        price: 6.99,
      },
    ],
    coffee: [
      coffeeFactory({
        id: 0,
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      }),
      coffeeFactory({
        id: 1,
        title: "Presto Coffee Beans 1kg",
        price: 15.99,
      }),
      coffeeFactory({
        id: 2,
        title: "AROMISTICO Coffee 1kg",
        price: 6.99,
      }),
      coffeeFactory({
        id: 3,
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      }),
      coffeeFactory({
        id: 4,
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      }),
      coffeeFactory({
        id: 5,
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      })
    ],
    goods: [
      {
        id: 0,
        image: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        image: "good-1.jpg",
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        image: "good-1.jpg",
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        image: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 4,
        image: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 5,
        image: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
    ],
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
  }
}

export default cardStore;