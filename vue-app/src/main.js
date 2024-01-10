import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 注册全局组件
import MyGlobalComponent from './components/MyGlobalComponent.vue';
app.component('MyGlobalComponent', MyGlobalComponent);

app.mount('#app');