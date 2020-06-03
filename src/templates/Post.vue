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

    <Tags :tags="$page.post.tags" class="ml-4" />

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
      path
      tags {
        id
      }
    }
  }
</page-query>

<script>
import Tags from "~/components/Tags";

export default {
  metaInfo() {
    return {
      title: `${this.$page.post.title} | Prateek Kumar | Developer`,
      script: [
        {
          innerHTML: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              name: `${this.$page.post.title}`,
              url: `https://prateekkumar.in/blog${this.$page.post.path}`,
              author: {
                "@type": "Person",
                name: "Prateek Kumar",
                url: "https://prateekkumar.in",
              },
              datePublished: `${this.$page.post.date}`,
              headline: `${this.$page.post.title}`,
            },
            null,
            2
          ),
          type: "application/ld+json",
        },
      ],
    };
  },
  components: { Tags },
  mounted() {
    this.$nextTick(function () {
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
  },
};
</script>
