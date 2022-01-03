import { ActionContext } from 'vuex';
import { fetchAsk, fetchList, fetchNews, NewsItem } from '@/api';
import { RootState } from '@/store/state';
import { Mutations, MutationTypes } from '@/store/mutations';

enum ActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_LIST = 'FETCH_LIST',
  FETCH_ASK = 'FETCH_ASk',
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

const actions = {
  async [ActionTypes.FETCH_NEWS](
    { commit }: MyActionContext,
    payload?: NewsItem[],
  ) {
    const { data } = await fetchNews();
    commit(MutationTypes.SET_NEWS, data);
    return data;
  },

  async [ActionTypes.FETCH_ASK]({ commit }: MyActionContext) {
    const { data } = await fetchAsk();
    //commit(MutationTypes.SET_ASK, data);
    commit(MutationTypes.SET_ASK, data);
    return data;
  },

  async [ActionTypes.FETCH_LIST](
    { commit }: MyActionContext,
    listType: string,
  ) {
    const { data } = await fetchList(listType);
    commit(MutationTypes.SET_LIST, data);
    return data;
  },
};

type Actions = typeof actions;

export { ActionTypes, actions, Actions };
// import {
//   fetchNews,
//   fetchAsk,
//   fetchJobs,
//   fetchUser,
//   fetchItem,
//   fetchList,
// } from '@/api';
//
// export default {
//   FETCH_NEWS({ commit }) {
//     return fetchNews().then(response => commit('SET_NEWS', response.data));
//   },
//   FETCH_ASK({ commit }) {
//     return fetchAsk().then(response => commit('SET_ASK', response.data));
//   },
//   FETCH_JOBS({ commit }) {
//     return fetchJobs().then(response => commit('SET_JOBS', response.data));
//   },
//   FETCH_USER({ commit }, userId) {
//     return fetchUser(userId).then(res => commit('SET_USER', res.data));
//   },
//   FETCH_ITEM({ commit }, itemId) {
//     return fetchItem(itemId).then(res => commit('SET_ITEM', res.data));
//   },
//   // hoc
//   FETCH_LIST({ commit }, listType) {
//     return fetchList(listType).then(res => commit('SET_LIST', res.data));
//   },
// };
