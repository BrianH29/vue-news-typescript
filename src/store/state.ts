import { NewsItem } from '@/api';

const state = {
  news: [] as NewsItem[],
  list: [] as NewsItem[],
  ask: [] as NewsItem[],
};

type RootState = typeof state;

export { RootState, state };
