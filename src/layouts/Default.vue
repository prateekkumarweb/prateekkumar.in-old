<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <NavBar class="pb-40" />
    <div class="flex-grow -mt-40 p-4">
      <section class="container mx-auto p-6 shadow-lg rounded-lg bg-white">
        <div
          v-if="$page && $page.post && $page.post.image"
          class="-mx-6 -mt-6 -mb-16 md:-mb-6"
        >
          <g-image :src="$page.post.image" class="w-full rounded-t-lg" />
        </div>
        <div
          class="flex flex-col md:flex-row border-b-2 border-gray-400 pb-6 mb-4 items-center"
        >
          <g-image
            class="h-48 w-48 md:h-32 md:w-32 rounded-full"
            src="https://s.gravatar.com/avatar/032b5330be600e6ebb83110ad1c52c96?s=500"
            alt="Profile"
          />

          <div
            class="flex flex-col px-6 items-center text-center md:text-left md:items-start"
          >
            <h1 class="text-3xl">{{ $static.metadata.siteName }}</h1>
            <p class="text-base">
              {{ $static.metadata.siteDescription }}
            </p>
            <!-- <g-link
              to="/blog/"
              class="bg-primary hover:bg-white hover:text-primary border-primary border-2 inline-block text-white font-semibold rounded py-1 px-3 mt-4"
              >Go to my blog</g-link
            > -->
          </div>
        </div>
        <slot />
      </section>
    </div>
    <Footer />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
    }
  }
</static-query>

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
