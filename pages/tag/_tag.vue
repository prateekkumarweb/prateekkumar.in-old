<template>
  <div>
    <div class="mb-4 items-center">
      <nuxt-link to="/blog/">
        <font-awesome :icon="['fas', 'arrow-left']"></font-awesome>
        <span class="pl-2 link">Back to all posts</span>
      </nuxt-link>
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
