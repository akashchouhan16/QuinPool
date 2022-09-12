import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";
import VuetifyDaterangePicker from "vuetify-daterange-picker";
Vue.use(VuetifyDaterangePicker);
Vue.use(VueToast, {
  position: "top-right",
  duration: 2000
});


import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
