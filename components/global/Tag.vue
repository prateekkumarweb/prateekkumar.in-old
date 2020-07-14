<template>
  <a
    :href="'/tag/' + tag"
    class="inline-block bg-gray-400 px-2 mr-1 my-1 rounded-l-full rounded-r-full"
    >#{{ tag }}</a
  >
</template>

<script>
export default {
  props: { tag: { type: String, required: true } },
};
</script>
