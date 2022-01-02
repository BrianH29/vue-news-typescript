<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { fetchNews } from '@/api';

export default {
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [],
    };
  },

  created() {
    this.fetchNewsItems();
  },

  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      this.newsItems = response.data;
    },
  },
};
</script>

<style></style>
