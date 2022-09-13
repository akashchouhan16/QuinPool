<template>
  <div class="initiate-pool-container">
    <preloaderComponent></preloaderComponent>
    <div class="initiate-pool-inner-container" v-if="!isLoading">
      <!--  -->
      <div class="user-header">
        <h3>Initiate A Pool Ride!</h3>
        <v-progress-circular
          indeterminate
          color="default"
          v-if="spinLoader"
        ></v-progress-circular>
      </div>
      <div class="user-initiate-div">
        <div class="map" id="map">
          <v-btn @click="getUserLocation()">Locate Me!</v-btn>
        </div>
        <div class="form">
          <v-progress-circular
            indeterminate
            color="default"
            v-if="spinLoader"
          ></v-progress-circular>
          <div v-else>
            <v-row justify="center">
              <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="default" dark v-bind="attrs" v-on="on">
                    Select Pool Details
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar dark color="default">
                    <v-btn icon dark @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Initiate Pool Ride</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn dark text @click="dialog = false"> Close </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <div class="selector">
                    <div class="select-date">
                      <div class="select-date-tag">Pick A Date</div>
                      <v-date-picker
                        v-model="poolDate"
                        color="black lighten-1"
                        rounded="true"
                        :min="new Date().toISOString().substr(0, 10)"
                      ></v-date-picker>
                    </div>
                    <div class="select-time">
                      <div class="select-time-tag">Select A Time</div>
                      <v-time-picker
                        v-model="poolTime"
                        ampm-in-title
                        format="ampm"
                        landscape
                        color="black lighten-1"
                        rounded="true"
                      ></v-time-picker>
                    </div>
                  </div>
                  <v-divider></v-divider>
                  <div class="select-seating-capacity">
                    <div class="select-seating-capacity-tag">
                      Seating Capacity
                    </div>
                    <v-radio-group v-model="seatCapacity" row>
                      <v-radio label="2 Seats" value="2">2 Seats</v-radio>
                      <v-radio label="4 Seats" value="4">4 Seats</v-radio>
                    </v-radio-group>
                    <v-btn color="default" @click="savePoolDetails()">Save</v-btn>
                  </div>
                  <v-divider></v-divider>
                  
                </v-card>
              </v-dialog>
            </v-row>
            <v-btn color="success" dark class="init-ride-btn" :disabled="!isInitiateBtnActive" @click="initiatePool()">Initiate Ride</v-btn>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/InitiatePoolComponent.js"></script>

<style scoped>
#map {
  height: 60vh;
  width: 55%;
}
.initiate-pool-inner-container {
  width: 90vw;
  height: 100vh;
  padding: 1rem;
  background-color: white;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  /* position: relative; */
}
.user-header {
  width: 95%;
  background-color: whitesmoke;
  border-radius: 1em;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-initiate-div {
  margin: 0.5rem;
  width: 97%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
}
.map {
  border-radius: 1em;
  background-color: whitesmoke;
  width: 58%;
  height: 60vh;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  border-radius: 1em;
  background-color: whitesmoke;
  width: 40%;
  height: 60vh;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.init-ride-btn{
  margin: 1.5rem !important;
}
.form-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
}
.selector {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.select-date,
.select-time,
.select-seating-capacity {
  background-color: whitesmoke;
  border-radius: 1em;
  width: 90%;
  height: 70vh;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: scroll; */
}
.select-seating-capacity{
  width: 97%;
  height: 20vh !important;
}
.select-date-tag,
.select-time-tag {
  padding: 1rem;
  font-size: medium;
}

@media screen and (max-width: 750px) {
  .user-initiate-div {
    margin: 1rem;
    width: 99%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow: scroll;
  }
  .map,
  #map {
    border-radius: 1em;
    background-color: whitesmoke;
    width: 95%;
    height: 60vh;
  }
  .form {
    border-radius: 1em;
    background-color: whitesmoke;
    width: 95%;
    height: 40vh;
  }
}
</style>