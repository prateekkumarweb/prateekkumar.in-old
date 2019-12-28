<template>
  <div class="flex flex-col min-h-screen">
    <NavBar class="pb-40" />
    <div class="flex-grow -mt-40 p-4">
      <section class="container mx-auto p-6 shadow-lg rounded-lg bg-white">
        <slot />
      </section>
    </div>
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
