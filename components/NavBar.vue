<template>
  <header
    class="
      flex flex-col
      md:flex-row md:items-center md:justify-around
      px-4
      py-3
      md:px-0
      bg-primary
      text-white
    "
  >
    <div class="flex flex-row items-center">
      <div class="md:mr-3 flex-1">
        <NuxtLink to="/" class="text-2xl">Prateek Kumar</NuxtLink>
      </div>
      <div class="text-xl md:hidden">
        <font-awesome
          :icon="['fas', navOpen ? 'times' : 'bars']"
          class="cursor-pointer"
          @click="toggleNav()"
        ></font-awesome>
      </div>
    </div>
    <nav
      class="
        flex flex-col
        md:flex-row
        items-start
        md:items-center
        text-xl
        md:block
      "
      :class="{ hidden: !navOpen }"
    >
      <NuxtLink to="/blog/" class="hover:text-gray-400 m-2 text-xl align-middle"
        >Blog</NuxtLink
      >
      <a class="m-2 align-middle" href="https://twitter.com/prateekkumarweb">
        <font-awesome :icon="['fab', 'twitter']"></font-awesome>
        <span class="md:hidden pl-2">Twitter</span>
      </a>
      <a
        class="m-2 align-middle"
        href="https://www.linkedin.com/in/prateekkumarweb"
      >
        <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
        <span class="md:hidden pl-2">LinkedIn</span>
      </a>
      <a class="m-2 align-middle" href="https://github.com/prateekkumarweb">
        <font-awesome :icon="['fab', 'github']"></font-awesome>
        <span class="md:hidden pl-2">GitHub</span>
      </a>
      <a
        class="
          m-2
          inline-block
          rounded-full
          py-2
          px-3
          bg-blue-300
          text-primary
          align-middle
          text-sm
        "
        href="javascript:"
        title="Switch theme"
        @click="changeTheme()"
      >
        <font-awesome :icon="['fas', getThemeIcon()]"></font-awesome>
        <span class="sr-only">Theme</span>
        <span class="pl-1">{{ $colorMode.preference | capitalize }}</span>
      </a>
      <Search :class="['mt-4 mb-2 md:my-0']" />
    </nav>
  </header>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
    changeTheme() {
      switch (this.$colorMode.preference) {
        case 'system':
          this.$colorMode.preference = 'light';
          break;
        case 'light':
          this.$colorMode.preference = 'dark';
          break;
        case 'dark':
          this.$colorMode.preference = 'system';
          break;
      }
      // switch (this.$colorMode.value) {

      // }
    },
    getThemeIcon() {
      switch (this.$colorMode.preference) {
        case 'system':
          return 'desktop';
        case 'light':
          return 'sun';
        case 'dark':
          return 'moon';
      }
    },
  },
});
</script>
