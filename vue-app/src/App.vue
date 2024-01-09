<!-- v-bind 例子:-->

<template>
  <div>
    <a v-bind:href="link">Visit Tracy's Blogs</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: 'https://blog.csdn.net/Tracycoder'
    };
  }
};
</script>


<!-- v-model 例子:-->
<!-- 
<template>
  <div>
    <input v-model="message" placeholder="Enter a message">
    <p>The message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello world'
    };
  }
};
</script>
-->

<!-- v-if 例子:-->
<!-- <template>
  <div>
    <p v-if="seen">Now you see me</p>
    <p v-else-if="type === 'important'">This is important</p>
    <p v-else>This is not important</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
      type: 'normal'
    };
  }
};
</script>
-->

<!-- v-for例子:-->
<!-- <template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'First item' },
        { id: 2, text: 'Second item' },
        { id: 3, text: 'Third item' }
      ]
    };
  }
};
</script> -->



<!-- v-show 例子:-->
<!-- <template>
  <div>
    <button @click="toggle">Toggle Message</button>
    <p v-show="isDisplayed">This message can be toggled</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisplayed: true
    };
  },
  methods: {
    toggle() {
      this.isDisplayed = !this.isDisplayed;
    }
  }
};
</script> -->


<!-- v-on 例子:-->
<!-- <template>
  <div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
};
</script> -->
