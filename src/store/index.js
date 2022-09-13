import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/* Import Stores */ 
import userStore from "./user.store";

export default new Vuex.Store({
 modules: {
    /* Register Stores */ 
    userStore
  },
});