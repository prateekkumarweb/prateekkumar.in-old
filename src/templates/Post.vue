<template>
  <Layout>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-3">{{ $page.post.title }}</h1>
          <p class="subtitle is-4">Prateek Kumar</p>
        </div>
      </div>
    </div>
    <div class="markdown" v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: post(path: $path) {
      id
      title
      content
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

<style lang="scss" scoped>
post h1 {
  font-size: 2rem;
}
</style>
