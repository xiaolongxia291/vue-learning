<!-- App.vue -->
<template>
  <div id="app">
    <!-- 使用全局组件 -->
    <MyGlobalComponent></MyGlobalComponent>
    <!-- 使用局部组件 -->
    <MyLocalComponent></MyLocalComponent>
    <HelloWorld />
    <ParentComponent></ParentComponent>
  </div>
</template>

<script>
// 引入并注册局部组件
import HelloWorld from './components/HelloWorld.vue';
import MyLocalComponent from './components/MyLocalComponent.vue';
import ParentComponent from './components/ParentComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyLocalComponent,
    ParentComponent
  }
};
</script>
