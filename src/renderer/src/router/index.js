import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../components/Login.vue'
export default createRouter({
  history: createWebHashHistory(),//hash模式
  routes:[{ path: "/", component: Login }]//路由配置规则数组
})
