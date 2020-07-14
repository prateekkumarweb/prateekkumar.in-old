<template>
  <div>
    {{ authors.join(', ') }}
    <br />
    <strong>{{ title }}.</strong>&nbsp; <em>{{ conf }}</em
    >&nbsp;
    <a
      v-if="pdf"
      :href="pdf"
      class="link"
      target="_blank"
      rel="nofollow noopener noreferrer"
      >PDF</a
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PublicationItem extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Array, default: () => [] }) readonly authors!: string[];
  @Prop(String) readonly conf: string | undefined;
  @Prop(String) readonly pdf: string | undefined;
}
</script>
