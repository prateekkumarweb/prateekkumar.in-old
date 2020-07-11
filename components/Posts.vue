<template>
  <Section title="Posts">
    <ul>
      <li v-for="post in posts" :key="post.path" class="p-4">
        <div>
          <div class="flex justify-between flex-wrap">
            <nuxt-link :to="getUrl(post)" class="link text-xl">{{
              post.title
            }}</nuxt-link>
            <span class="text-gray-700">
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

<script>
import Section from '~/components/home/Section';
import Tags from '~/components/Tags';

export default {
  components: { Section, Tags },
  props: ['posts'],
  methods: {
    getUrl(post) {
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
};
</script>
