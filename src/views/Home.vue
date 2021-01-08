<!--
 * @Author: your name
 * @Date: 2020-10-30 14:30:27
 * @LastEditTime: 2020-11-18 16:41:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5模板\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="div" style="background-color: pink;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/global";
img {
  width: px(200rem);
  height: px(200rem);
}
.div {
  width: px(200rem);
  height: px(200rem);
}
</style>
