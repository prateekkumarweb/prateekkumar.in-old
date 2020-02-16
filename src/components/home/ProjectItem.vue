<template>
  <div
    class="max-w-sm flex flex-col rounded-lg bg-gray-200 shadow p-3 mt-3 mr-3"
  >
    <h3 class="font-bold text-lg">{{ title }}</h3>
    <p class="py-2">{{ desc }}</p>
    <div class="flex-grow"></div>
    <div class="flex">
      <div class="py-2">
        <a
          v-if="licenseText"
          :class="{ 'hover:underline': licenseUrl }"
          class="bg-green-600 p-1 text-xs text-white font-bold rounded"
          :href="licenseUrl"
          >{{ licenseText }}</a
        >
      </div>
      <div class="flex-grow"></div>
      <div>
        <a class="text-2xl px-2" :href="github" v-if="github">
          <font-awesome :icon="['fab', 'github']"></font-awesome>
          <span class="sr-only">GitHub</span>
        </a>
        <a class="text-2xl px-2" :href="docs" v-if="docs">
          <font-awesome :icon="['fas', 'book']"></font-awesome>
          <span class="sr-only">Documentation</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    github: String,
    docs: String,
    licenseText: String,
    licenseUrl: String
  }
};
</script>
