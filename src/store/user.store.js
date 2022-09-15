import { userLogin, getUser } from "@/services/user.service.js";

export default {
  state: {
    user: {},
    isLoggedIn: false,
  },

  getters: {
    getUser(state) {
      return state.user;
    },
    getLoggedInStatus(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser;
    },
    setLoggedInStatus(state, status) {
      state.isLoggedIn = status;
    },
  },
  actions: {
    LOGIN_USER({ commit }, { success, error, user }) {
      userLogin({
        success: (response) => {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("isLoggedIn", true);
          commit("setLoggedInStatus", true);
          success();
        },
        error: (e) => {
          //   commit("setUser", {});
          console.warn("Service call for login failed: ", e);
          commit("setLoggedInStatus", false);
          error();
        },
        user,
      });
    },
    GET_USER({ commit }, object) {
      getUser({
        success: (response) => {
          commit("setUser", response.data);
        },
        error: (e) => {
          //   commit("setUser", {});
          console.warn(e);
        },
        object: object,
      });
    },
    GET_LOGIN_STATUS({ commit }) {
      const user = this.$store.getters.user;
      if (user !== undefined && user !== null && user !== "") {
        commit("setLoggedInStatus", true);
      } else {
        console.warn("log in status was set to false due to undefined user");
        commit("setLoggedInStatus", false);
      }
    },
  },
};
