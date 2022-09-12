<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="black">
      <v-list-item>
        <v-list-item-content  class="white--text">
          <v-list-item-title class="text-h5">
            QuinPool
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">
            &copy; 2022 | Quinbay
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
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
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>

      <v-toolbar-title  class="white--text">QuinPool</v-toolbar-title>
    </v-app-bar>

    <v-main class="ma-5" color="white">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       drawer: null,
       items: [
          { title: 'Home', icon: 'mdi-home', to: '/' },
          { title: 'Find Pool', icon: 'mdi-car-search-outline', to: '/findpool' },
          { title: 'Initiate Pool', icon: 'mdi-car-3-plus', to:'/initiatepool' },
          { title: 'Log In', icon: 'mdi-login', to: '/login'},
          { title: 'Sign Up', icon: 'mdi-account-plus', to: 'signup'}
        ],
        right: null,  
    }),
  }
</script>



<style>
*{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.v-main__wrap{
    flex: 1 1 auto;
    /* max-width: 100%; */
    width: 90vw;
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
.v-main{
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
@media screen and (max-width:450px){
  .v-application .ma-5{
    margin: 0 !important;
  }
  .v-main ma-5{
    margin: 0 !important; 
  }
  .v-main__wrap{
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