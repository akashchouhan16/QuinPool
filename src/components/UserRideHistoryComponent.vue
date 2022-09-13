<template>
  <div class="ride-history-container">
    <preloaderComponent></preloaderComponent>

    <!-- <div class="main-container" v-if="!isLoading">
      <span class="history-title text-h6">Akash Chouhan's Car Pool History</span>
    </div> -->

    <div class="secondary-container" v-if="!isLoading">
      <v-card width="100%">
        <v-toolbar color="black" dark>
          <v-toolbar-title>
            <v-icon>mdi-history</v-icon> | Ride History</v-toolbar-title
          >

          <v-spacer></v-spacer>

          <v-toolbar dark color="black" v-if="viewSeachBar">
            <!-- <v-toolbar-title>State selection</v-toolbar-title> -->
            <v-autocomplete
              v-model="select"
              :loading="loading"
              :items="items.title"
              :search-input.sync="search"
              cache-items
              class="mx-4"
              flat
              hide-no-data
              hide-details
              label="seach"
              solo-inverted
            ></v-autocomplete>
            <!-- <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->
          </v-toolbar>
          <v-btn icon @click="toggleSearchBar()">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <img src="@/assets/71363-location-pin.gif" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle">
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-btn icon color="default" @click="deleteHistory()"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script src="./scripts/UserRideHistoryComponent.js"></script>

<style scoped>
.ride-history-container {
  width: 90vw;
  height: 85vh;
  border-radius: 1em;
  background-color: white;
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.ride-history-container .main-container,
.ride-history-container .secondary-container {
  background-color: whitesmoke;
  border-radius: 1em;
  /* margin: 0.5rem; */
}
.ride-history-container .main-container {
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.ride-history-container .secondary-container {
  width: 100%;
  /* height: 50vh; */
  overflow: scroll;
}
</style>