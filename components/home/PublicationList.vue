<template>
  <ul>
    <li v-for="pub in publications" :key="pub.title" class="pb-3">
      <PublicationItem
        :title="pub.title"
        :authors="pub.authors"
        :conf="pub.conf"
        :pdf="pub.pdf"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import PublicationItem from '~/components/home/PublicationItem.vue';

export default Vue.extend({
  components: { PublicationItem },

  data() {
    return { publications: [] };
  },

  async created() {
    this.publications = ((await this.$content(
      'me/publications'
    ).fetch()) as any).publications;
  },
});
</script>
