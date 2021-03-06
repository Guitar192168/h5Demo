import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// 引入全局样式
import "assets/styles/global.scss"
// 引入适配方案
import "assets/js/adapter"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
