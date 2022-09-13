<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="black">
      <v-list-item>
        <v-list-item-content class="white--text">
          <v-list-item-title class="text-h5 white--text"> QuinPool </v-list-item-title>
          <v-list-item-subtitle> &copy; 2022 | Quinbay </v-list-item-subtitle>
          <v-list-item-subtitle
            v-if="isLoggedIn || loginStatus"
            @click="logOutUser()" class="logout-btn white--text"
            >Log Out</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          class="white--text"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="black" elevate-on-scroll>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        color="white"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">QuinPool</v-toolbar-title>
    </v-app-bar>

    <v-main class="" color="white">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  data: () => ({
    drawer: null,
    loginStatus: false,
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Find Pool", icon: "mdi-car-search-outline", to: "/findpool" },
      { title: "Initiate Pool", icon: "mdi-car-3-plus", to: "/initiatepool" },
      // { title:  (this.isLoggedIn)? 'Log In' : 'Log out', icon: 'mdi-login', to: '/login'},
      { title: 'Sign Up', icon: 'mdi-account-plus', to: '/signup'}
    ],
    right: null,
  }),
  created() {
    this.updateLoginStatus();
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "getLoggedInStatus",
    }),
  },
  methods: {
    updateLoginStatus() {
      this.loginStatus = localStorage.getItem("isLoggedIn") === "true";
    },
    logOutUser() {
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("isLoggedIn");

      Vue.$toast.open({
        message: "logging out",
        type: "default",
        duration: 2000,
      });

      location.reload();

    },
  },
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.logout-btn{
  cursor: pointer;
  transition: all .3s;
}
.logout-btn:hover{
  color: white !important;
  text-decoration: underline;
}
.v-main__wrap {
  flex: 1 1 auto;
  /* max-width: 100%; */
  width: 100vw;
  position: relative;
  background-color: whitesmoke;
  border-radius: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  /* height: 200vh; */

  overflow: hidden;
}
.v-main {
  display: flex;
  /* flex: 1 0 auto; */
  width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100%;
}
v-list-item-subtitle {
  color: #b8b6b6 !important;
  font-size: xx-small !important;
}
@media screen and (max-width: 450px) {
  .v-application .ma-5 {
    margin: 0 !important;
  }
}
@media screen and (max-width: 450px) {
  .v-application .ma-5 {
    margin: 0 !important;
  }
  .v-main__wrap {
    flex: 1 1 auto;
    width: 100%;
    position: relative;
    background-color: whitesmoke;
    border-radius: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>