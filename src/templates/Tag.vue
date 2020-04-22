<template>
  <Layout>
    <div class="mb-4 items-center">
      <g-link to="/blog/" class="link">
        <font-awesome :icon="['fas', 'arrow-left']"></font-awesome>
        <span class="pl-2">Back to all posts</span>
      </g-link>
    </div>
    <div class="pt-2 text-2xl">#{{ $page.tag.id }}</div>
    <Posts :posts="$page.tag.belongsTo.edges" />
  </Layout>
</template>

<page-query>
  query Tag($id: ID!) {
    tag: tag(id: $id) {
      id
      belongsTo {
        edges {
          node {
            ... on Post {
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
    }
  }
</page-query>

<script>
import Posts from "~/components/Posts";

export default {
  metaInfo() {
    return {
      title: `Tag - #${this.$page.tag.id} | Prateek Kumar | Developer`,
    };
  },
  components: { Posts },
};
</script>
