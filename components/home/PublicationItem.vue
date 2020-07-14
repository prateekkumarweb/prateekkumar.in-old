<template>
  <div>
    {{ authors.join(', ') }}
    <br />
    <strong>{{ title }}.</strong>&nbsp; <em>{{ conf }}</em
    >&nbsp;
    <a
      v-if="pdf"
      :href="pdf"
      class="link"
      target="_blank"
      rel="nofollow noopener noreferrer"
      >PDF</a
    >
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: null },
    authors: { type: Array, default: () => [] },
    conf: { type: String, default: null },
    pdf: { type: String, default: null },
  },
};
</script>
