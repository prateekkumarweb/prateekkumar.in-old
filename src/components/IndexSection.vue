<template>
  <section class="section">
    <h2 class="title is-4">{{ title }}</h2>
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"]
};
</script>
