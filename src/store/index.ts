import Vue from 'vue';
import Vuex from 'vuex';
// import getters from './getters.js';
// import mutations from './mutations.js';
// import actions from './actions.js';
import { state } from './state';

Vue.use(Vuex);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// });

const store = {
  state,
};
export default new Vuex.Store(store);
