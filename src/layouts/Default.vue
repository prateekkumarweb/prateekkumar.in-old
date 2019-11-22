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
          The source code is licensed
          <a
            class="has-text-primary"
            href="http://opensource.org/licenses/mit-license.php"
          >MIT</a>. The website content
          is licensed
          <a
            class="has-text-primary"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
          >CC BY SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

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
