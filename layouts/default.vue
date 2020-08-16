<template>
  <div :class="{ dark: isDarkThemeEnabled }">
    <div class="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-500">
      <NavBar />
      <div class="flex-grow p-4 my-2">
        <section
          class="container mx-auto p-6 shadow rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white"
        >
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
