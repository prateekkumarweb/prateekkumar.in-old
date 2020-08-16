<template>
  <div>
    {{ authors.join(', ') }}
    <br />
    <strong>{{ title }}.</strong>&nbsp; <em>{{ conf }}</em
    >&nbsp;
    <a
      v-if="pdf"
      :href="pdf"
      class="text-primary underline dark:text-blue-300 hover:no-underline"
      target="_blank"
      rel="nofollow noopener noreferrer"
      >PDF</a
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: { type: String, required: true },
    authors: { type: Array, default: () => [] },
    conf: { type: String, default: '' },
    pdf: { type: String, default: '' },
  },
});
</script>
