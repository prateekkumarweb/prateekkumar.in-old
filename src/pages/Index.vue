<template>
  <Layout>
    <Section title="Projects">
      <p>Some of the interesting things that I have built/contributed to.</p>
      <ProjectList />
    </Section>

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
      <a
        href="https://scholar.google.co.in/citations?user=M1NFyhAAAAAJ&hl=en"
        class="bg-primary hover:bg-white hover:text-primary border-primary border-2 inline-block text-white font-semibold rounded py-1 px-3 mt-4"
        >Google Scholar</a
      >
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
import ProjectList from "~/components/home/ProjectList";

export default {
  metaInfo: {
    title: "Prateek Kumar | Developer | Rust and JavaScript",
  },
  components: {
    Section,
    PublicationItem,
    PublicationList,
    ProjectList,
  },
};
</script>
