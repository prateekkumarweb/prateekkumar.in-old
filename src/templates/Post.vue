<template>
  <Layout>
    <div class="mb-4 items-center">
      <div class="flex justify-between">
        <g-link to="/blog/" class="link">
          <font-awesome :icon="['fas', 'arrow-left']"></font-awesome>
          <span class="pl-2">Back to all posts</span>
        </g-link>
        <span class="text-gray-700">{{
          $page.post.date.substring(0, 10)
        }}</span>
      </div>
    </div>

    <div class="markdown px-4" v-html="$page.post.content"></div>

    <div class="ml-4">
      <a
        v-for="tag in $page.post.tags"
        :href="'/tags/' + tag.id"
        :key="tag.id"
        class="inline-block bg-gray-400 px-2 mr-1 rounded-l-full rounded-r-full"
      >
        #{{ tag.id }}
      </a>
    </div>

    <div id="comments"></div>
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: post(path: $path) {
      id
      title
      content
      date
      image
      tags {
        id
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `${this.$page.post.title} | Prateek Kumar | Developer`
    };
  },
  components: {},
  mounted() {
    this.$nextTick(function() {
      if (window.MathJax) {
        window.MathJax.typeset();
      }
    });
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "prateekkumarweb/prateekkumar.in-comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comments");
    script.setAttribute("theme", "github-light");
    script.crossOrigin = "anonymous";
    script.async = true;
    document.getElementById("comments").appendChild(script);
  }
};
</script>
