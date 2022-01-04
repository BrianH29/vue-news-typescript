import { RootState } from '@/store/state';
import { NewsItem } from '@/interface/ListInterface';

const getters = {
  fetchedList(state: RootState): NewsItem[] {
    return state.list;
  },
};

type Getters = typeof getters;

export { Getters, getters };
// export default {
//   fetchedItem(state) {
//     return state.item;
//   },
//   fetchedUser(state) {
//     return state.user;
//   },
//   fetchedList(state) {
//     return state.list;
//   },
//   // ItemView
//   userName(state) {
//     return state.item.user;
//   },
//   userContent(state) {
//     return state.item.content;
//   },
//   userQuestion(state) {
//     return state.item.title;
//   },
//   userTimeAgo(state) {
//     return state.item.time_ago;
//   },
//   contentPoints(state) {
//     return state.item.points;
//   },
// };
