<template>
  <Layout>
    <div
      class="flex flex-col md:flex-row border-b-2 border-gray-400 pb-6 mb-4 items-center"
    >
      <g-image
        class="h-64 w-64 rounded-full"
        src="https://s.gravatar.com/avatar/032b5330be600e6ebb83110ad1c52c96?s=500"
        alt="Profile"
      />

      <div
        class="flex flex-col px-6 items-center text-center md:text-left md:items-start"
      >
        <h1 class="text-4xl">{{ $page.metadata.siteName }}</h1>
        <p class="text-xl">
          {{ $page.metadata.siteDescription }}
        </p>
        <g-link
          to="/blog/"
          class="bg-primary hover:bg-white hover:text-primary border-primary border-2 inline-block text-white font-semibold rounded p-2 mt-4"
          >Go to my blog</g-link
        >
      </div>
    </div>

    <Section title="Education">
      <ul>
        <li>
          B. Tech. (Honors) in
          <g-link to="https://cse.iith.ac.in" class="link"
            >Computer Science and Engineering</g-link
          >, 2015 - 2019
          <br />
          <g-link to="https://iith.ac.in" class="link"
            >Indian Institute of Technology Hyderabad</g-link
          >
        </li>
      </ul>
    </Section>

    <Section title="Publications">
      <PublicationList />
    </Section>

    <Section title="Contact">
      <div class="buttons">
        <a href="mailto:prateek@prateekkumar.in" class="icon-button">
          <span class="icon pr-2">
            <font-awesome :icon="['fas', 'envelope']" />
          </span>
          <span>prateek@prateekkumar.in</span>
        </a>
      </div>
    </Section>
  </Layout>
</template>

<page-query>
  query {
    metadata {
      siteName
      siteDescription
    }
  }
</page-query>

<script>
import Section from "~/components/home/Section";
import PublicationItem from "~/components/home/PublicationItem";
import PublicationList from "~/components/home/PublicationList";

export default {
  metaInfo: {
    title: "Prateek Kumar | Developer"
  },
  components: {
    Section,
    PublicationItem,
    PublicationList
  }
};
</script>
