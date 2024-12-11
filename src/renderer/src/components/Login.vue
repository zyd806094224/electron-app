<template>
  <div>
    Login
    <h1>{{ name }}</h1>
    <button @click="click">登录</button>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { login } from '../api'

let name = ref('name')

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
