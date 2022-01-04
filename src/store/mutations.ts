// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };

import { RootState } from '@/store/state';
import { NewsItem } from '@/interface/ListInterface';

enum MutationTypes {
  SET_NEWS = 'SET_NEWS',
  SET_LIST = 'SET_LIST',
  SET_ASK = 'SET_ASK',
}

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
  [MutationTypes.SET_ASK](state: RootState, ask: NewsItem[]) {
    state.ask = ask;
  },

  [MutationTypes.SET_LIST](state: RootState, list: NewsItem[]) {
    console.log('mutation set_list : ', list);
    state.list = list;
  },
};

type Mutations = typeof mutations;

export { mutations, Mutations, MutationTypes };
