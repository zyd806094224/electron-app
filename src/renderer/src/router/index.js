import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import LuckySheet from '../pages/LuckySheet.vue'
export default createRouter({
  history: createWebHashHistory(),//hash模式
  routes:[{ path: "/", component: Login },
    {path:"/home",component: Home},
    {path:"/luckySheet",component: LuckySheet}]//路由配置规则数组
})
