<template>
  <Section title="Posts">
    <ul>
      <li v-for="post in posts" :key="post.path" class="p-4">
        <div>
          <div class="flex justify-between flex-wrap">
            <NuxtLink :to="getUrl(post)" class="link text-xl">{{
              post.title
            }}</NuxtLink>
            <span class="text-gray-700 dark:text-gray-300">
              {{ post.date.substring(0, 10) }}
            </span>
          </div>
          <!-- TODO Add excerpt for post -->
          <div>
            <Tags :tags="post.tags" />
          </div>
        </div>
      </li>
    </ul>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue';
import Section from '~/components/home/Section.vue';
import Tags from '~/components/Tags.vue';

export default Vue.extend({
  components: { Section, Tags },
  props: {
    posts: { type: Array, required: true },
  },
  methods: {
    getUrl(post: any) {
      const date = new Date(post.date);
      return (
        '/' +
        date.getFullYear() +
        '/' +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '/' +
        post.slug +
        '/'
      );
    },
  },
});
</script>
