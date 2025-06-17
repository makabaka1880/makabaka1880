<template>
  <span :id="id" class="anchor">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Anchor',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.anchor {
  border-bottom: 1px dashed #409EFF;
  color: #409EFF;
}
.anchor:hover {
  color: #66b1ff;
}
</style>
