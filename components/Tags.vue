<template>
  <div>
    <Tag v-for="tag in tags" :key="tag" :tag="tag" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop({ type: Array, required: true }) readonly tags!: string[];
}
</script>
