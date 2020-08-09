<template>
  <section class="py-4">
    <h2 class="text-2xl">{{ title }}</h2>
    <div class="mt-3">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: { type: String, required: true },
  },
});
</script>
