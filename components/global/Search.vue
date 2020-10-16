<template>
  <div class="inline-block w-full md:w-64 relative">
    <div
      class="rounded-full py-1 px-2 text-gray-600 bg-white border border-transparent text-sm flex items-center w-full md:inline-block"
    >
      <font-awesome :icon="['fas', 'search']" class="mx-1"></font-awesome>
      <input
        type="text"
        class="focus:outline-none m-1 flex-grow"
        placeholder="Search"
        :value="query"
        @input="debounce(search, $event)"
        @focus="showResults = true"
        @keydown.down.prevent="onArrowDown"
        @keydown.up.prevent="onArrowUp"
        @keydown.enter.prevent="onEnter"
      />
    </div>
    <div
      v-if="showResults && query"
      class="absolute rounded-lg my-2 text-gray-600 bg-white text-sm w-full shadow-lg z-10 overflow-hidden"
    >
      <div v-if="results.length === 0" class="p-3">No results available</div>
      <div
        v-for="(result, key) in results"
        :key="result.refIndex"
        class="p-3 hover:bg-blue-300 hover:text-primary"
        :class="{
          'border-t': key !== 0,
          'bg-blue-300 text-primary': key === arrowCounter,
        }"
      >
        <nuxt-link :to="getPostLink(result.item)">{{
          result.item.title
        }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Fuse from 'fuse.js';

export default Vue.extend({
  data() {
    return {
      query: '',
      timeout: (null as unknown) as number,
      results: [] as Fuse.FuseResult<Object>[],
      showResults: false,
      arrowCounter: 0,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    debounce(fn: Function, event: any, duration: number = 250) {
      this.query = event.target.value;
      this.showResults = true;
      if (this.timeout !== null) {
        window.clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout(() => {
        fn();
      }, duration);
    },
    async search() {
      const posts = await this.$content('posts', { deep: true })
        .sortBy('date', 'desc')
        .fetch();
      const fuse = new Fuse(posts as [], {
        includeScore: true,
        isCaseSensitive: false,
        keys: ['title', 'tags'],
      });
      this.results = fuse.search(this.query);
      if (this.results.length <= this.arrowCounter) this.arrowCounter = 0;
    },
    getPostLink(post: any) {
      const date = new Date(post.date);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `/${year}/${month}/${post.slug}`;
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.$router.push(this.getPostLink(this.results[this.arrowCounter].item));
      this.showResults = false;
    },
    handleClickOutside(event: any) {
      if (!this.$el.contains(event.target)) {
        this.showResults = false;
      }
    },
  },
});
</script>
