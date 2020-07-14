<template>
  <a
    :href="'/tag/' + tag"
    class="inline-block bg-gray-400 px-2 mr-1 my-1 rounded-l-full rounded-r-full"
    >#{{ tag }}</a
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Tag extends Vue {
  @Prop({ type: String, required: true }) readonly tag!: string;
}
</script>
