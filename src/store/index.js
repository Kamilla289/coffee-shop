import { createStore } from 'vuex';

import links from './Links'
import cardStore from './coffeeCardStore'

const store = createStore({
  modules: {
    links,
    cardStore
  }
});

export default store;