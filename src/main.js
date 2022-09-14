import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";
import VuetifyDaterangePicker from "vuetify-daterange-picker";
Vue.use(VuetifyDaterangePicker);
Vue.use(VueToast, {
  position: "bottom-right",
  duration: 2000,
});

import router from "@/router/index.js";
import store from "@/store/index";

Vue.config.productionTip = false;

Vue.filter("filterUIAddress", (address) => {
  if (address.length <= 40) return address;
  else {
    return address.substring(0, 40) + "..";
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
