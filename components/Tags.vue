<template>
  <div>
    <a
      v-for="tag in tags"
      :key="tag"
      :href="'/tag/' + tag"
      class="inline-block bg-gray-400 px-2 mr-1 my-1 rounded-l-full rounded-r-full"
      >#{{ tag }}</a
    >
  </div>
</template>

<script>
export default {
  props: ['tags'],
};
</script>
