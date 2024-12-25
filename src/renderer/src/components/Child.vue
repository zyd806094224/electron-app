<template>
  <div class="root">
    <span>子组件</span>
    <span>{{ test }}</span>
    <span>{{msg}}</span>
    <input type="text" v-model="msg"/>
  </div>
</template>

<script setup lang="ts" name="Child">
import useCusRef from '../hooks/useCusRef'

let msg = useCusRef('11',3000).msg

defineProps(['test'])
</script>

<style scoped>
.root{
  display: flex;
  flex-direction: column;
}
</style>
