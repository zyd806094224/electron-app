<template>
  <div class="childRoot">
    <span>子组件</span>
    <span>{{ test }}</span>
    <span>{{msg}}</span>
    <input type="text" v-model="msg"/>
    <button @click="notifyParent">点击更新父组件</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import useCusRef from '../hooks/useCusRef'

let msg = useCusRef('11',3000).msg

defineProps(['test'])
const emit = defineEmits({
  update: (payload) => {
    if (typeof payload !== 'string') {
      throw new Error('The payload must be a string')
    }
  }
})

// 触发事件
function notifyParent() {
  emit('update', '子组件触发更新父组件了')
}
</script>

<style scoped>
.childRoot{
  display: flex;
  flex-direction: column;
}
</style>
