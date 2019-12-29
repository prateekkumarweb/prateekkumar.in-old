<template>
  <Layout>
    <Section title="Posts">
      <ul>
        <li
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          class="py-4"
        >
          <g-link :to="edge.node.path" class="link">
            {{ edge.node.title }}
          </g-link>
          <p>{{ edge.node.excerpt }}</p>
          <span>{{ edge.node.date.substring(0, 10) }}</span>
        </li>
      </ul>
    </Section>
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
          excerpt
          date
        }
      }
    }
  }
</page-query>

<script>
import Section from "~/components/home/Section";

export default {
  metaInfo: {
    title: "Blog | Prateek Kumar | Developer"
  },
  components: { Section }
};
</script>
