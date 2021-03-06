import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "../node_modules/element-ui/lib/theme-chalk/index.css";
import "../src/css/style.css";
import router from "./router";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
