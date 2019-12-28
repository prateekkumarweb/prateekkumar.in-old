<template>
  <div class="flex flex-col min-h-screen">
    <NavBar class="pb-48" />
    <section class="flex-grow mx-auto -mt-40 p-6">
      <slot />
    </section>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.has-text-underline {
  text-decoration: underline;
}
</style>

<script>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
