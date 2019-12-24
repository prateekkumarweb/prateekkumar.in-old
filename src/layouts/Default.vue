<template>
  <div class="body">
    <NavBar />
    <section class="section">
      <div class="container">
        <slot />
      </div>
    </section>
    <footer class="footer has-background-dark has-text-light">
      <div class="content has-text-centered">
        <p>
          <strong class="has-text-white">&copy; 2019 Prateek Kumar.</strong>
          The source code for this website is licensed under
          <a
            class="has-text-white has-text-underline"
            href="https://opensource.org/licenses/mit-license.php"
          >MIT</a>.
          The website content is licensed under
          <a
            class="has-text-white has-text-underline"
            href="https://creativecommons.org/licenses/by-sa/4.0/"
          >CC BY SA 4.0</a>.
          <br />Built using Vue.js, Bulma, Gridsome. Deployed using Netlify.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.has-text-underline {
  text-decoration: underline;
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>
