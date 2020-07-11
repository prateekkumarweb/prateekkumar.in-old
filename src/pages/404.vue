<template>
  <Layout>
    <Section title="404 - Not Found">
      <div class="m-12 lg:w-1/2">
        <g-image src="/images/404.svg" class="w-full"></g-image>
      </div>
    </Section>
  </Layout>
</template>

<script>
import Section from "~/components/home/Section";

export default {
  metaInfo: {
    title: "404 - Not Found | Prateek Kumar | Developer",
  },
  components: {
    Section,
  },
};
</script>
