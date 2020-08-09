<template>
  <div>
    <Tag v-for="tag in tags" :key="tag" :tag="tag" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tags: { type: Array, required: true },
  },
});
</script>
