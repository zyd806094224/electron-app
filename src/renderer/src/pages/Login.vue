<template>
  <div>
    Login
    <h1>{{ name }}</h1>
    <h1>{{ count }}</h1>
    <button @click="click">登录</button>
    <button @click="ipcHandle">ipc</button>
    <button @click="testWatch">watch</button>
    <button @click="hooks">hooks</button>
  </div>

</template>

<script setup lang="ts">
import { reactive, ref ,watch} from 'vue'
import { login } from '../api'
import { useCounter } from '../hooks/useCounter'

interface Person{
  name: string
  age: string
}

let name = ref('name')

let person = reactive({name: '111',age: 11})

// 使用自定义 Hooks
const { count, increment, decrement, reset } = useCounter(10);

watch(() => person.name,(newVal,oldVal) => {
  console.log(newVal,oldVal)
})

function testWatch(){
  person.name += '~'
}

function hooks(){
  increment(1)
}


const ipcHandle = () => window.electron.ipcRenderer.send('ping')

function click(){
  reqLogin()
}

async function reqLogin(){
  try {
    let res = await login('123', '123')
    console.log("1111" + res.toString())
  } catch (e) {
    console.log("eeee" + e.toString())
  }
}

</script>

<style scoped>

</style>
