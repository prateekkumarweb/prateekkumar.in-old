<template>
  <header
    class="flex flex-col sm:flex-row items-center justify-around py-3 bg-primary text-white"
  >
    <div class="my-3 flex flex-col sm:flex-row items-baseline">
      <div class="md:mr-3 mb-1">
        <NuxtLink to="/" class="text-2xl">Prateek Kumar</NuxtLink>
      </div>
      <nav class="self-center mb-1">
        <ul class="flex text-xl">
          <li class="mx-3">
            <NuxtLink to="/blog/" class="hover:text-gray-400">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="mb-1">
      <a
        class="mx-2 text-2xl align-middle"
        href="https://twitter.com/prateekkumarweb"
      >
        <font-awesome :icon="['fab', 'twitter']"></font-awesome>
        <span class="sr-only">Twitter</span>
      </a>
      <a
        class="mx-2 text-2xl align-middle"
        href="https://www.linkedin.com/in/prateekkumarweb"
      >
        <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
        <span class="sr-only">LinkedIn</span>
      </a>
      <a
        class="mx-2 text-2xl align-middle"
        href="https://github.com/prateekkumarweb"
      >
        <font-awesome :icon="['fab', 'github']"></font-awesome>
        <span class="sr-only">GitHub</span>
      </a>
      <a
        class="inline-block rounded-full py-2 px-3 bg-blue-300 text-primary align-middle"
        href="javascript:"
        title="Switch theme"
        @click="changeTheme()"
      >
        <font-awesome
          :icon="['fas', getThemeIcon($store.state.theme)]"
        ></font-awesome>
        <span class="sr-only">Theme</span>
        <span class="pl-1">{{ $store.state.theme | capitalize }}</span>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  filters: {
    capitalize(value: string) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    changeTheme() {
      this.$store.dispatch('toggleTheme');
    },
    getThemeIcon(theme: 'system' | 'light' | 'dark') {
      switch (theme) {
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
