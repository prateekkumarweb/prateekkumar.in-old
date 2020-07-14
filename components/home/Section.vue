<template>
  <section class="py-4">
    <h2 class="text-2xl">{{ title }}</h2>
    <div class="mt-3">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Section extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
}
</script>
