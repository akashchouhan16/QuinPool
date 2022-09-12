<template>
  <div class="find-pool-container">
    <div class="preloader" v-if="isLoading">
      <p class="text-h5">loading...</p>
    </div>
    <div class="find-pool-inner-container" v-else>
      <p class="text-h6 mt-3">Find A Pool Ride</p>
      <div class="map" id="map"></div>
      <div class="selector-div">
        <div class="map-btns">
          <v-btn @click="getUserLocation()" small> Locate Me! </v-btn>
          <v-btn @click="resetUserLocation()" small>Reset</v-btn>
        </div>
      </div>

      <div class="find-rides-list">
        <div class="rides-header">Nearby Pool Rides</div>
        <div v-for="(value, index) in 7" :key="index" class="pool-ride">
          <div class="pool-name">Pool QXY23</div>
          <div class="pool-trip-cost">Rs. 5/km</div>
          <div class="text-center">
            <!-- v-model="menu" -->
            <v-menu :close-on-content-click="false" :nudge-width="200" offset-x>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="default" dark v-bind="attrs" v-on="on">
                  Book Ride
                </v-btn>
              </template>

              <v-card>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="Initiator"
                      />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Akash Chouhan</v-list-item-title>
                      <v-list-item-subtitle
                        >Quinbay Employee</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-switch v-model="message" color="default"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title> Notify User </v-list-item-title>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="black white--text" @click="bookPoolRide()">
                    Book
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/FindPoolComponent.js">
</script>

<style scoped>
#map {
  height: 50vh;
  width: 80vw;
}
.find-pool-inner-container {
  width: 90vw;
  height: 130vh;
  background-color: white;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  position: relative;
}
.find-pool-container .map,
.find-pool-container .selector-div {
  margin: 0.5rem 0.5rem;
  padding: 0.5rem;
  background-color: whitesmoke;
  border-radius: 1em;
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.find-pool-container .map {
  height: 70%;
  border: 2px solid rgb(198, 198, 198);
  box-shadow: 3px 3px 10px rgb(203, 202, 202);
}
.find-pool-container .selector-div {
  height: 7%;
  width: 20%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  font-size: xx-small !important;
}
.map-btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
}
.find-rides-list {
  width: 90%;
  height: 50vh;
  margin-top: 1rem;
  padding: 2rem;
  background-color: whitesmoke;
  border-radius: 1em;
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: nowrap; */
  /* align-content: center; */
  /* justify-content: center; */
  /* align-items: center; */
  overflow-y: scroll;
  overflow-x: hidden;
  /* position: relative; */
}
.rides-header {
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pool-ride {
  width: 95%;
  height: 15vh;
  margin: 0.5rem;
  border-radius: 1em;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
}

@media screen and (max-width: 700px) {
  .pool-ride {
    width: 95%;
    height: 25vh;
    margin: 0.5rem;
    border-radius: 1em;
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
  }
}

@media screen and (max-width: 450px) {
  .find-pool-container .selector-div {
    height: 10%;
    width: 95%;
    position: absolute;
    top: 0;
    /* right: 0; */
    display: flex;
    justify-content: space-evenly;
    align-items: space-around;
  }
  .map-btns v-btn {
    font-size: xx-small !important;
  }
}
</style>