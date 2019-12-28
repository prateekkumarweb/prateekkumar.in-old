<template>
  <Layout>
    <div class="border-b-2 border-gray-400 pb-6 mb-4 items-center">
      <div>
        <g-link to="/blog" class="link">
          <font-awesome :icon="['fas', 'arrow-left']"></font-awesome>
          <span class="pl-2">Back to all posts</span>
        </g-link>
      </div>
      <div class="my-auto px-6 text-center">
        <h1 class="text-4xl">{{ $page.post.title }}</h1>
        <p class="text-gray-600">{{ $page.post.date.substring(0, 10) }}</p>
      </div>
    </div>

    <Section title="Posts">
      <div class="markdown" v-html="$page.post.content"></div>
    </Section>
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: post(path: $path) {
      id
      title
      content
      date
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
