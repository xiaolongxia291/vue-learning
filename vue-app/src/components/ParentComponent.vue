<!-- ParentComponent.vue -->
<template>
    <div>
      <h1>父组件</h1>
      <ChildComponent :message="parentMessage" />
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        parentMessage: '这是来自父组件的消息'
      };
    }
  };
  </script>
  