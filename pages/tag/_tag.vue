<template>
  <div>
    <div class="mb-4 items-center">
      <NuxtLink to="/blog/">
        <font-awesome :icon="['fas', 'arrow-left']"></font-awesome>
        <span
          class="
            pl-2
            text-primary
            underline
            dark:text-blue-300
            hover:no-underline
          "
        >
          Back to all posts
        </span>
      </NuxtLink>
    </div>
    <div class="pt-2 text-2xl">#{{ tag }}</div>
    <Posts :posts="posts" />
  </div>
</template>

<script>
import Posts from '~/components/Posts';

export default {
  components: { Posts },
  async asyncData({ $content, params }) {
    const posts = await $content('posts', { deep: true })
      .where({ tags: { $contains: params.tag } })
      .fetch();
    return { posts, tag: params.tag };
  },
  head() {
    return {
      title: `Tag - #${this.tag} | Prateek Kumar | Developer`,
    };
  },
};
</script>
