<template>
  <nuxt-link
    :to="'/tag/' + tag"
    class="
      text-sm
      inline-block
      bg-gray-400
      dark:bg-gray-600
      px-2
      mr-1
      my-1
      rounded-l-full rounded-r-full
    "
  >
    #{{ tag }}
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: { tag: { type: String, required: true } },
});
</script>
