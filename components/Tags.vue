<template>
  <div>
    <Tag v-for="tag in tags" :key="tag" :tag="tag" />
  </div>
</template>

<script>
export default {
  props: { tags: { type: Array, required: true } },
};
</script>
