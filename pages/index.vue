<template>
  <div>
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
  </div>
</template>

<script>
import PublicationList from '~/components/home/PublicationList';
import ProjectList from '~/components/home/ProjectList';
import Section from '~/components/home/Section';

export default {
  components: {
    Section,
    PublicationList,
    ProjectList,
  },
  head: {
    title: 'Prateek Kumar | Developer | Rust and JavaScript',
    script: [
      {
        innerHTML: JSON.stringify(
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            email: 'prateek@prateekkumar.in',
            name: 'Prateek Kumar',
            gender: 'male',
            image:
              'https://gravatar.com/avatar/032b5330be600e6ebb83110ad1c52c96?s=256',
            url: 'https://prateekkumar.in',
            sameAs: [
              'https://twitter.com/prateekkumarweb',
              'https://github.com/prateekkumarweb',
              'https://www.linkedin.com/in/prateekkumarweb',
            ],
            alumniOf: [
              {
                '@type': 'CollegeOrUniversity',
                name: 'Indian Institute of Technology Hyderabad',
                url: 'https://iith.ac.in',
              },
            ],
          },
          null,
          2
        ),
        type: 'application/ld+json',
      },
    ],
  },
};
</script>
