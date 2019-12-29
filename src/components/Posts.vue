<template>
  <Section title="Posts">
    <ul>
      <li v-for="edge in posts" :key="edge.node.id" class="p-4">
        <div>
          <div class="flex justify-between flex-wrap">
            <g-link :to="edge.node.path" class="link text-xl">
              {{ edge.node.title }}
            </g-link>
            <span class="text-gray-700">{{
              edge.node.date.substring(0, 10)
            }}</span>
          </div>
          <p class="markdown" v-html="getExcerpt(edge.node.content)"></p>
          <div>
            <a
              v-for="tag in edge.node.tags"
              :href="'/tags/' + tag.id"
              :key="tag.id"
              class="inline-block bg-gray-400 px-2 mr-1 rounded-l-full rounded-r-full"
            >
              #{{ tag.id }}
            </a>
          </div>
        </div>
      </li>
    </ul>
  </Section>
</template>

<script>
import Section from "~/components/home/Section";

export default {
  props: ["posts"],
  components: { Section },
  methods: {
    getExcerpt(content) {
      const startIndex = content.indexOf("<p>");
      const endIndex = content.indexOf("</p>");
      if (startIndex === -1 || endIndex === -1) {
        return "";
      }
      const excerpt = content.substring(startIndex + 3, endIndex) + "...";
      return excerpt;
    }
  }
};
</script>
