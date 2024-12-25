<template>
  <div class="root">
    <div class="left">
      <button @click="back">返回</button>
      <span>{{ childUpdateText }}</span>
      <span>{{ childMittUpdateText }}</span>
      <el-tree ref="tree"
               :data="data"
               :default-checked-keys="defaultCheckedKeys"
               :default-expanded-keys="defaultExpandedKeys"
               node-key="id"
               :props="defaultProps" @node-click="handleNodeClick" />
    </div>
    <div class="right">
      {{ content }}
      <Child :test="test" @update="handleUpdate" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import Child from '../components/Child.vue'
import emitter from '../utils/emitter'

interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const router = useRouter()
let content = ref('')

let test = ref('haha')

let childUpdateText = ref('等待子组件更新我')

let childMittUpdateText = ref('mitt更新')

function handleUpdate(value) {
  childUpdateText.value = value
}

//默认选中
let defaultCheckedKeys = ['1', '3']
//默认展开
let defaultExpandedKeys = ref(['1', '3'])

onMounted(() => {
  defaultExpandedKeys.value = ['1-1', '3-1']
  emitter.on('mittTest', (value: string) => {
    childMittUpdateText.value = value
  })
})

onUnmounted(() => {
  emitter.off('mittTest')
})

function back() {
  router.back()
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
  content.value = data.label
}

const data: Tree[] = [
  {
    id: '1',
    label: 'Level one 1',
    children: [
      {
        id: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            id: '1-1-1',
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    label: 'Level one 2',
    children: [
      {
        id: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            id: '2-1-1',
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        id: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            id: '2-2-1',
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    label: 'Level one 3',
    children: [
      {
        id: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            id: '3-1-1',
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        id: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            id: '3-2-1',
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}

</script>

<style scoped>

.root {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.left {
  background: #0000ff;
  width: 200px;
  margin-right: 10px; /* 与右侧区域的间距 */
  display: flex;
  flex-direction: column;
}

.right {
  flex: 1;
  background: #42d392;
}
</style>
