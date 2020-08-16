<template>
  <section class="py-2">
    <h2 class="text-xl">{{ title }}</h2>
    <div class="mt-2">
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
