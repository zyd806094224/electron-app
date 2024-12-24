<template>
  <span>子组件</span>
  <span>{{ test }}</span>
</template>

<script setup lang="ts" name="Child">

defineProps(['test'])
</script>

<style scoped>

</style>
