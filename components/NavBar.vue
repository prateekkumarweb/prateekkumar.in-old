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
        class="mr-1 text-xl"
        href="javascript:"
        title="Switch theme"
        @click="changeTheme()"
      >
        <font-awesome
          :icon="['fas', this.$store.state.darkTheme ? 'sun' : 'moon']"
        ></font-awesome>
        <span class="sr-only">Theme</span>
      </a>
      <a class="mx-2 text-2xl" href="https://twitter.com/prateekkumarweb">
        <font-awesome :icon="['fab', 'twitter']"></font-awesome>
        <span class="sr-only">Twitter</span>
      </a>
      <a
        class="mx-2 text-2xl"
        href="https://www.linkedin.com/in/prateekkumarweb"
      >
        <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
        <span class="sr-only">LinkedIn</span>
      </a>
      <a class="ml-2 text-2xl" href="https://github.com/prateekkumarweb">
        <font-awesome :icon="['fab', 'github']"></font-awesome>
        <span class="sr-only">GitHub</span>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    changeTheme() {
      this.$store.dispatch('toggleTheme');
    },
  },
});
</script>
