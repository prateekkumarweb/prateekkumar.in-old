<template>
  <header
    class="flex flex-col sm:flex-row items-center justify-around py-3 bg-primary text-white"
  >
    <div class="text-2xl my-3">
      <a href="/">Prateek Kumar</a>
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
