<template>
  <section class="py-4">
    <h2 class="text-2xl">{{ title }}</h2>
    <div class="mt-3">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"],
};
</script>
