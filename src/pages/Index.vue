<template>
  <Layout>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <g-image
            class="profile-img"
            src="https://s.gravatar.com/avatar/032b5330be600e6ebb83110ad1c52c96?s=500"
          />
          <h1 class="title is-3">Prateek Kumar</h1>
          <p class="subtitle is-4">Developer. ❤️ Mathematics and Computer Science.</p>
        </div>
      </div>
    </div>

    <EducationList />

    <ProjectsList />

    <PublicationsList />

    <div class="tile is-vertical box notification is-light">
      <h2 class="title is-4">Contact</h2>
      <div class="buttons">
        <a href="mailto:prateek@prateekkumar.in" class="button">
          <span class="icon">
            <font-awesome :icon="['fas', 'envelope']" />
          </span>
          <span>prateek@prateekkumar.in</span>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import EducationList from "~/components/EducationList.vue";
import ProjectsList from "~/components/ProjectsList.vue";
import PublicationsList from "~/components/PublicationsList.vue";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    EducationList,
    ProjectsList,
    PublicationsList
  }
};
</script>

<style scoped>
.profile-img {
  max-width: 300px;
}
</style>
