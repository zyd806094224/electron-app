import { ref } from "vue";

export function useCounter(initialValue: number = 0) {
  // 定义计数状态
  const count = ref(initialValue);

  // 增加计数
  const increment = (step: number = 1) => {
    count.value += step;
  };

  // 减少计数
  const decrement = (step: number = 1) => {
    count.value -= step;
  };

  // 重置计数
  const reset = () => {
    count.value = initialValue;
  };

  // 返回状态和操作方法
  return {
    count,
    increment,
    decrement,
    reset,
  };
}
