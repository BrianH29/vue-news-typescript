import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
// import getters from './getters.js';
import { RootState, state } from './state';
import { mutations } from '@/store/mutations';
import { actions } from '@/store/actions';

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

/**
 * with type setup
 * helps you with shortcut
 */
const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions,
};
export default new Vuex.Store(store);
