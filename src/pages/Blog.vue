<template>
  <Layout>
    <div class="border-b-2 border-gray-400 pb-6 mb-4 items-center">
      <div class="my-auto px-6 items-center text-center">
        <h1 class="text-4xl">Blog</h1>
        <p class="text-gray-600">Posts by Prateek Kumar</p>
      </div>
    </div>

    <Section title="Posts">
      <ul>
        <li
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          class="py-4"
        >
          <a :href="edge.node.path" class="link">{{ edge.node.title }}</a>
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
    title:
      "Prateek Kumar | Developer | Rust and JavaScript | WebAssembly Enthusiast"
  },
  components: { Section }
};
</script>
