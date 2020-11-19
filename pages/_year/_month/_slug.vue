<template>
  <div>
    <div class="mb-4 items-center">
      <div class="flex justify-between">
        <NuxtLink to="/blog/">
          <font-awesome :icon="['fas', 'arrow-left']"></font-awesome>
          <span
            class="pl-2 text-primary underline dark:text-blue-300 hover:no-underline"
            >Back to all posts</span
          >
        </NuxtLink>
        <span class="text-gray-700 dark:text-gray-300">
          {{ post.date.substring(0, 10) }}
        </span>
      </div>
    </div>

    <article class="px-4 py-2">
      <img
        v-if="post.image"
        :src="post.image"
        alt="Banner Image"
        class="mb-4"
      />
      <NuxtContent :document="post" class="max-w-none prose" />
    </article>

    <Tags :tags="post.tags" class="ml-4" />

    <div class="py-2 px-4"><Disqus /></div>
  </div>
</template>

<script>
import Tags from '~/components/Tags.vue';

export default {
  components: { Tags },
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.year, params.slug).fetch();
    return { post };
  },
  head() {
    return {
      title: `${this.post.title} | Prateek Kumar | Developer`,
      script: [
        {
          innerHTML: JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              name: `${this.post.title}`,
              url: 'https://prateekkumar.in' + this.getUrl(this.post),
              author: {
                '@type': 'Person',
                name: 'Prateek Kumar',
                url: 'https://prateekkumar.in',
              },
              datePublished: `${this.post.date}`,
              dateModified: `${this.post.updatedAt}`,
              headline: `${this.post.title}`,
              image: `https://prateekkumar.in${
                this.post.image || '/images/profile.jpg'
              }`,
              publisher: {
                '@type': 'Organization',
                name: 'Prateek Kumar',
                url: 'https://prateekkumar.in',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://prateekkumar.in/images/logo-192.png',
                },
              },
              mainEntityOfPage:
                'https://prateekkumar.in' + this.getUrl(this.post),
            },
            null,
            2
          ),
          type: 'application/ld+json',
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
    };
  },
  mounted() {
    this.$nextTick(function () {
      if (window.MathJax) {
        window.MathJax.typeset();
      }
    });
  },
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
