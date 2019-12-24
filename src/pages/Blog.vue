<template>
  <Layout>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-3">Blog</h1>
          <p class="subtitle is-4">Coming soon!</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
    allPost {
        edges {
            node {
                title
            }
        }
    }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Prateek Kumar | Developer"
  },
  components: {}
};
</script>
