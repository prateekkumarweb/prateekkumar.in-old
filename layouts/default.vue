<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <NavBar class="pb-40" />
    <div class="flex-grow -mt-40 p-4">
      <section class="container mx-auto p-6 shadow-lg rounded-lg bg-white">
        <div
          class="flex flex-col md:flex-row border-b-2 border-gray-400 pb-6 mb-4 items-center"
        >
          <img
            class="h-48 w-48 md:h-32 md:w-32 rounded-full"
            src="https://gravatar.com/avatar/032b5330be600e6ebb83110ad1c52c96?s=256"
            alt="Profile"
          />
          <div
            class="flex flex-col px-6 items-center text-center md:text-left md:items-start"
          >
            <h1 class="text-3xl">Prateek Kumar</h1>
            <p class="text-base">Developer | Rust and JavaScript</p>
          </div>
        </div>
        <Nuxt />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
