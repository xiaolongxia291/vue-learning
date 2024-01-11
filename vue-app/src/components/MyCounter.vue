<template>
    <div>
      <p>当前计数：{{ count }}</p>
      <button @click="increment">增加计数</button>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    setup() {
      const count = ref(0);
  
      function increment() {
        count.value++;
      }
  
      watch(count, (newValue, oldValue) => {
        console.log(`计数从 ${oldValue} 变为 ${newValue}`);
      });
  
      return {
        count,
        increment
      };
    }
  };
  </script>