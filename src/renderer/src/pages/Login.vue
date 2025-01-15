<template>
  <div class="login-root">
    <span>{{ name }}</span>
    <span>{{ count }}</span>
    <span>当前求和piniaTest:{{ countStore.sum }}</span>
    <div class="content">
      <button @click="click">登录</button>
      <button @click="ipcHandle">ipc</button>
      <button @click="testWatch">watch</button>
      <button @click="hooks">hooks</button>
      <button @click="piniaClick">pinia</button>
      <button @click="toHome">主页跳转</button>
      <button @click="toLuckySheet">表格跳转</button>
      <button @click="toECharts">ECharts跳转</button>
      <button @click="promiseTest">promise测试</button>
      <button @click="promiseRaceClick">promiseRace测试</button>
      <button @click="closure">闭包测试</button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { reactive, ref ,watch} from 'vue'
import { login } from '../api'
import { useCounter } from '../hooks/useCounter'
import {useCountStore} from '../store/count'
import {useRouter} from 'vue-router'
import { promiseAllTest, promiseRaceTest } from '../utils/promise'
import { closureTest } from '../utils/closure'
import { CACHE_KEY, useCache } from '../hooks/useCache'

const router = useRouter()
interface Person{
  name: string
  age: string
}

const countStore = useCountStore()

let name = ref('name')

let person = reactive({name: '111',age: 11})

// 使用自定义 Hooks
const { count, increment, decrement, reset } = useCounter(10)

const {wsCache} = useCache()

const fn = closureTest()

watch(() => person.name,(newVal,oldVal) => {
  console.log(newVal,oldVal)
})


async function testUseCache(){
  let userInfo = wsCache.get(CACHE_KEY.USER)
  if(!userInfo){
    // await getUserInfo()
  }
  wsCache.set(CACHE_KEY.USER,userInfo)
}

function testWatch(){
  person.name += '~'
}

function hooks(){
  increment(1)
}

function piniaClick(){
  countStore.increment(10)
}

function toHome(){
  router.push('/home')
}

function toLuckySheet(){
  router.push('/luckySheet')
}

function toECharts(){
  router.push('/echarts')
}

function promiseTest(){
  promiseAllTest()
}

function promiseRaceClick(){
  promiseRaceTest()
}

function closure(){
  fn()
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

.login-root{
  display: flex;
  flex-direction: column;
}

.content{
  display: flex;
  flex-direction: column;
  width: 100px;
}

</style>
