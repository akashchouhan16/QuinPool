<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="blue">
      <v-list-item>
        <v-list-item-content  class="white--text">
          <v-list-item-title class="text-h6">
            QuinPool
          </v-list-item-title>
          <v-list-item-subtitle>
            CarPool Service
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


    <v-app-bar app color="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title  class="white--text">Quinbay CarPool</v-toolbar-title>
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
          { title: 'Initiate Pool', icon: 'mdi-car-3-plus', to:'/initiatepool' }
        ],
        right: null,  
    }),
  }
</script>



<style scoped>
.v-main__wrap{
  flex: 1 1 auto;
    max-width: 100%;
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
}
</style>