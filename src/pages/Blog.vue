<template>
  <Layout>
    <Posts :posts="$page.allPost.edges" />
  </Layout>
</template>

<page-query>
  query {
    allPost(sortBy: "date") {
      totalCount
      edges {
        node {
          id
          title
          path
          content
          date
          tags {
            id
          }
        }
      }
    }
  }
</page-query>

<script>
import Posts from "~/components/Posts";

export default {
  metaInfo: {
    title: "Blog | Prateek Kumar | Developer",
  },
  components: { Posts },
};
</script>
