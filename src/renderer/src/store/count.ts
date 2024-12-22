import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{

  actions: {
    increment(value: number){
      //修改数据
      this.sum += value
    }
  },
  //真正存储数据的地方
  state(){
    return {
      sum: 6
    }
  }
})
