<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <section class="flex-grow mx-auto">
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
