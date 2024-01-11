<template>
    <button @click="handleClick">点击我</button>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        alert('按钮被点击了！')
      }
    }
  };
  </script>
  