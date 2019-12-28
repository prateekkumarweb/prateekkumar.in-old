<template>
  <Layout>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <g-image
            class="profile-image"
            src="https://s.gravatar.com/avatar/032b5330be600e6ebb83110ad1c52c96?s=500"
          />

          <h1 class="title is-3">Prateek Kumar</h1>
          <p class="subtitle is-4">
            Developer. ❤️ Mathematics and Computer Science.
          </p>
          <div>
            <g-link to="/blog/" class="button is-primary">Go to my blog</g-link>
          </div>
        </div>
      </div>
    </div>

    <Section title="Education">
      <ul>
        <li>
          B. Tech. (Honors) in
          <g-link to="https://cse.iith.ac.in"
            >Computer Science and Engineering</g-link
          >, 2015 - 2019
          <br />
          <g-link to="https://iith.ac.in"
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
        <a href="mailto:prateek@prateekkumar.in" class="button">
          <span class="icon">
            <font-awesome :icon="['fas', 'envelope']" />
          </span>
          <span>prateek@prateekkumar.in</span>
        </a>
      </div>
    </Section>
  </Layout>
</template>

<style scoped>
.profile-image {
  height: 300px;
}
</style>

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
