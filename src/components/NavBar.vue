<template>
  <header
    class="flex flex-col sm:flex-row items-center justify-around py-3 bg-primary text-white"
  >
    <div class="text-xl my-3">
      <a href="/">Prateek Kumar</a>
    </div>
    <div>
      <a class="icon-button" href="https://github.com/prateekkumarweb">
        <font-awesome :icon="['fab', 'github']"></font-awesome>
      </a>
      <a class="icon-button" href="https://twitter.com/prateekkumarweb">
        <font-awesome :icon="['fab', 'twitter']"></font-awesome>
      </a>
      <a class="icon-button" href="https://www.linkedin.com/in/prateekkumarweb">
        <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
      </a>
    </div>
  </header>
</template>
