<!-- ChildComponent.vue -->
<template>
    <div>
      <h2>子组件</h2>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    }
  };
  </script>
  