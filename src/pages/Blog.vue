<template>
  <Layout>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-3">Blog</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <ul>
        <li v-for="edge in $page.allPost.edges" :key="edge.node.id">
          <a :href="edge.node.path">{{edge.node.title}}</a>
          <p>{{edge.node.excerpt}}</p>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        path
        excerpt
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
