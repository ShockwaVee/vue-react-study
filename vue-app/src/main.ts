import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import "ant-design-vue/dist/antd.css";
import VueAxios from "vue-axios";
import { Avatar, Button, Input, List, Table, Tag, notification } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Input);
Vue.use(Table);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
Vue.use(Avatar);
Vue.prototype.$notification = notification;

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
});
Vue.use(VueAxios, axiosInstance);

new Vue({
  render: h => h(App)
}).$mount("#app");
