<template>
  <div
    class="w-full flex flex-col rounded border-gray-900 shadow p-3 mt-3 mr-3"
  >
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

<script>
export default {
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    github: { type: String, default: null },
    docs: { type: String, default: null },
    licenseText: { type: String, default: null },
    licenseUrl: { type: String, default: null },
  },
};
</script>
