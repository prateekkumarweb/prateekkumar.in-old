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
    script: [
      {
        innerHTML: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog | Prateek Kumar",
            url: "https://prateekkumar.in/blog/",
          },
          null,
          2
        ),
        type: "application/ld+json",
      },
    ],
  },
  components: { Posts },
};
</script>
