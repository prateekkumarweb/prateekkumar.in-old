<template>
  <header
    class="flex flex-col sm:flex-row items-center justify-around py-3 bg-primary text-white"
  >
    <div class="my-3 flex items-baseline">
      <div class="mr-3">
        <a href="/" class="text-2xl">Prateek Kumar</a>
      </div>
      <nav class="">
        <ul class="flex text-xle">
          <li class="mx-3">
            <g-link to="/" class="hover:text-gray-400">Home</g-link>
          </li>
          <li class="mx-3">
            <g-link to="/blog/" class="hover:text-gray-400">Blog</g-link>
          </li>
        </ul>
      </nav>
    </div>
    <div>
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
