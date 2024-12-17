<template>
  <div>
    Login
    <h1>{{ name }}</h1>
    <button @click="click">登录</button>
    <button @click="ipcHandle">ipc</button>
    <button @click="testWatch">watch</button>
  </div>

</template>

<script setup lang="ts">
import { reactive, ref ,watch} from 'vue'
import { login } from '../api'

interface Person{
  name: string
  age: string
}

let name = ref('name')

let person = reactive({name: '111',age: 11})

watch(() => person.name,(newVal,oldVal) => {
  console.log(newVal,oldVal)
})

function testWatch(){
  person.name += '~'
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
