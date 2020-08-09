<template>
  <div :class="{ dark: isDarkThemeEnabled }">
    <div class="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-500">
      <NavBar class="pb-40" />
      <div class="flex-grow -mt-40 p-4">
        <section
          class="container mx-auto p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white"
        >
          <div
            class="flex flex-col md:flex-row border-b-2 border-gray-400 pb-6 mb-4 items-center"
          >
            <img
              class="h-48 w-48 md:h-32 md:w-32 rounded-full"
              src="/images/profile.jpg"
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
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import NavBar from '~/components/NavBar.vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
  components: { NavBar, Footer },
  data() {
    return {
      isDarkThemeEnabled: false,
    };
  },
  computed: {
    ...mapState(['theme']),
  },
  mounted() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.isDarkThemeEnabled = true;
    }
  },
  created() {
    this.unsub = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_THEME') {
        this.isDarkThemeEnabled =
          state.theme === 'dark' ||
          (state.theme === 'system' &&
            // eslint-disable-next-line nuxt/no-globals-in-created
            window.matchMedia &&
            // eslint-disable-next-line nuxt/no-globals-in-created
            window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    });
  },
  beforeDestroy() {
    this.unsub();
  },
});
</script>
