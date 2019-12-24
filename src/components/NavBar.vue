<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Prateek Kumar</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-github" href="https://github.com/prateekkumarweb">
            <span class="icon">
              <font-awesome :icon="['fab', 'github']"></font-awesome>
            </span>
          </a>
          <a class="button is-twitter" href="https://twitter.com/prateekkumarweb">
            <span class="icon">
              <font-awesome :icon="['fab', 'twitter']"></font-awesome>
            </span>
          </a>
          <a class="button is-linkedin" href="https://www.linkedin.com/in/prateekkumarweb">
            <span class="icon">
              <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
            </span>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
