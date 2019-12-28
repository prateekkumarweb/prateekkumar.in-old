<template>
  <Layout>
    <Section title="Education">
      <ul>
        <li>
          B. Tech. (Honors) in
          <a href="https://cse.iith.ac.in" class="link"
            >Computer Science and Engineering</a
          >, 2015 - 2019
          <br />
          <a href="https://iith.ac.in" class="link"
            >Indian Institute of Technology Hyderabad</a
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
