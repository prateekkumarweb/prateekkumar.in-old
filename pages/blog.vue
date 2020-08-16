<template>
  <div>
    <MeCard />
    <Posts :posts="posts" />
  </div>
</template>

<script>
import Posts from '~/components/Posts';
import MeCard from '~/components/MeCard';

export default {
  components: { Posts, MeCard },

  async asyncData({ $content }) {
    const posts = await $content('posts', { deep: true })
      .sortBy('date', 'desc')
      .fetch();

    return { posts };
  },

  head: {
    title: 'Blog | Prateek Kumar | Developer',
    script: [
      {
        innerHTML: JSON.stringify(
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Blog | Prateek Kumar',
            url: 'https://prateekkumar.in/blog/',
          },
          null,
          2
        ),
        type: 'application/ld+json',
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
};
</script>
