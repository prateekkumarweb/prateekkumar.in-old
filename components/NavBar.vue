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
      <a class="icon-button" href="https://github.com/prateekkumarweb">
        <font-awesome :icon="['fab', 'github']"></font-awesome>
        <span class="sr-only">GitHub</span>
      </a>
      <a class="icon-button" href="https://twitter.com/prateekkumarweb">
        <font-awesome :icon="['fab', 'twitter']"></font-awesome>
        <span class="sr-only">Twitter</span>
      </a>
      <a class="icon-button" href="https://www.linkedin.com/in/prateekkumarweb">
        <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
        <span class="sr-only">LinkedIn</span>
      </a>
    </div>
  </header>
</template>
