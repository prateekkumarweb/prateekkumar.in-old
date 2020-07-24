<template>
  <div class="w-full flex flex-col p-3 mr-3">
    <div class="flex text-lg">
      <h3 class="font-bold inline-block">{{ title }}</h3>
      <div class="flex-grow"></div>
      <div>
        <a
          v-if="licenseText"
          :class="{ 'hover:underline': licenseUrl }"
          class="bg-green-600 px-2 py-1 text-xs text-white font-bold rounded"
          :href="licenseUrl"
          >{{ licenseText }}</a
        >
        <a v-if="github" class="pl-2" :href="github">
          <font-awesome :icon="['fab', 'github']"></font-awesome>
          <span class="sr-only">GitHub</span>
        </a>
        <a v-if="docs" class="pl-2" :href="docs">
          <font-awesome :icon="['fas', 'book']"></font-awesome>
          <span class="sr-only">Documentation</span>
        </a>
      </div>
    </div>
    <p class="py-2">{{ desc }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ProjectItem extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, required: true }) readonly desc!: string;
  @Prop(String) readonly github: string | undefined;
  @Prop(String) readonly docs: string | undefined;
  @Prop(String) readonly licenseText: string | undefined;
  @Prop(String) readonly licenseUrl: string | undefined;
}
</script>
