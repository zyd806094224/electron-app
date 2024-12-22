<template>
  <div class="root">
    <div class="left">
      <button @click="back">返回</button>
      左侧区域
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function back(){
  router.back()
}

</script>

<style scoped>

.root {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.left {
  background: #1b1b1f;
  width: 150px;
  margin-right: 10px; /* 与右侧区域的间距 */
  display: flex;
  flex-direction: column;
}

.right {
  flex: 1;
  background: #42d392;
}
</style>
