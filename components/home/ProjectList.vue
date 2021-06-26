<template>
  <div>
    <ProjectItem
      v-for="proj in projects"
      :key="proj.title"
      :title="proj.title"
      :desc="proj.desc"
      :github="proj.github"
      :docs="proj.docs"
      :license-text="proj.licenseText"
      :license-url="proj.licenseUrl"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectItem from '~/components/home/ProjectItem.vue';

export default Vue.extend({
  components: {
    ProjectItem,
  },

  data() {
    return {
      projects: [],
    };
  },

  async created() {
    this.projects = (
      (await this.$content('me/projects').fetch()) as any
    ).projects;
  },
});
</script>
