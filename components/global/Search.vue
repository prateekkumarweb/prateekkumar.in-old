<template>
  <div class="inline-block w-full md:w-64 relative">
    <div
      class="rounded-lg p-1 text-gray-600 bg-white border border-transparent text-sm flex items-center w-full md:inline-block"
    >
      <font-awesome :icon="['fas', 'search']" class="ml-2"></font-awesome>
      <input
        v-model="query"
        type="text"
        class="focus:outline-none m-1 flex-grow"
        placeholder="Search"
        @keyup.enter="search"
      />
    </div>
    <div
      v-if="query"
      class="absolute rounded-lg my-2 text-gray-600 bg-white border border-transparent text-sm w-full shadow-lg"
    >
      <div class="p-3">No results available</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      // eslint-disable-next-line no-console
      console.log(this.query);
      this.query = '';
    },
  },
});
</script>
