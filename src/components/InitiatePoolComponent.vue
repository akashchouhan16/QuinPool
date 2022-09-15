<template>
  <div class="initiate-pool-container">
    <preloaderComponent></preloaderComponent>
    <div class="initiate-pool-inner-container" v-if="!isLoading">
      <!--  -->
      <div class="user-header">
        <div class="avatar">
          <img src="@/assets/seller-profile-img.jpeg" alt="Image" />
        </div>
        <v-progress-circular
          indeterminate
          color="default"
          v-if="spinLoader"
          small
        ></v-progress-circular>
        <div class="meta-data" v-else>
          <div class="user-details">
            <p class="username-tag">
              <span class="user-greeting">Welcome, {{ userInfo.name }}!</span>
              <span class="username"> username: @{{ userInfo.username }}</span>
            </p>
            <p class="phonenumber-tag">Contact: {{ userInfo.phoneNumber }}</p>
            <p class="address-tag">
              Address: {{ userInfo.address | filterUIAddress }}
            </p>
          </div>

          <div class="vehicle-details">
            <div
              class="no-vehicle"
              v-if="!userInfo.hasVehicle"
              style="margin-left: 25%"
            >
              No vehicle has been registered
            </div>
            <div class="vehicle-meta" v-else>
              <span class="license-number"
                >Licence: {{ userInfo.license }}</span
              >
              <span class="vehicle">
                Vehicle: {{ userInfo.vehicle.brand }},{{
                  userInfo.vehicle.name
                }}
                [{{ userInfo.vehicle.color }}]</span
              >
              <span class="vehicle-number">{{
                userInfo.vehicle.vehicleNo
              }}</span>
              <p class="capacity-tag">
                Seating: {{ userInfo.vehicle.capacity }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="user-initiate-div">
        <div class="map" id="map">
          <v-btn @click="getUserLocation()">Locate Me!</v-btn>
        </div>
        <div class="form">
          <div class="form-inner">
            <v-progress-circular
              indeterminate
              color="default"
              v-if="spinLoader"
            ></v-progress-circular>
            <div class="dropdown-locations" style="color: black" v-else>
              <v-select :items="locations" label="Source" dense></v-select>
              <v-select :items="locations" label="Destination" dense></v-select>
              <v-btn
                color="success"
                dark
                class="init-ride-btn"
                :disabled="!isInitiateBtnActive"
                v-if="isInitiateBtnActive"
                @click="initiatePool()"
                >Initiate Ride</v-btn
              >
            </div>
            <div justify="center">
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
                  <v-toolbar dark color="black white--text">
                    <v-btn icon dark @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Initiate Pool Ride</v-toolbar-title>
                    <!-- <v-spacer></v-spacer> -->
                  </v-toolbar>
                  <div class="selector">
                    <div class="select-date-time">
                      <div class="select-date">
                        <div class="select-date-tag">Pick A Date</div>
                        <v-date-picker
                          v-model="poolDate"
                          color="black lighten-1"
                          width="280"
                          height="90"
                          rounded="true"
                          :min="new Date().toISOString().substr(0, 10)"
                          :max="getMaxDate()"
                        ></v-date-picker>
                      </div>

                      <div class="select-time">
                        <div class="select-time-tag">Select A Time</div>
                        <v-time-picker
                          v-model="poolTime"
                          ampm-in-title
                          format="ampm"
                          width="280"
                          color="black lighten-1"
                          rounded="true"
                          :min="validateTime"
                        ></v-time-picker>
                      </div>
                    </div>
                  </div>
                  <v-divider></v-divider>
                  <div class="select-seating-capacity">
                    <div class="select-seating-capacity-tag">
                      Seating Capacity
                    </div>
                    <v-radio-group v-model="seatCapacity" row>
                      <v-radio
                        :label="index + 1 + ' seats'"
                        :value="index + 1"
                        v-for="(seat, index) in userInfo.vehicle.capacity - 1"
                        :key="index"
                      ></v-radio>
                    </v-radio-group>
                    <v-btn color="black white--text" @click="savePoolDetails()"
                      >Save</v-btn
                    >
                  </div>
                  <v-divider></v-divider>
                </v-card>
              </v-dialog>
            </div>
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
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.user-header .avatar {
  padding: 1rem;
  border-radius: 50rem;
  /* background-color: white; */
}
.user-header .avatar img {
  max-width: 7rem;
  border-radius: 50%;
}
.user-header .meta-data {
  border-radius: 1em;
  width: 80%;
  background-color: rgb(235, 235, 235);
  padding: 1rem;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.meta-data .user-details {
  padding: 1rem;
  border-radius: 1em;
  background-color: whitesmoke;
  width: 45%;
  height: 95%;
}
.user-details .username-tag {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
}
.user-details .username-tag .user-greeting {
  font-size: medium;
  color: black;
  cursor: pointer;
}
.user-details .username-tag .username {
  font-size: x-small;
  color: rgb(90, 89, 89);
}
.user-details .phonenumber-tag,
.user-details .address-tag {
  font-size: small;
  color: rgb(90, 89, 89);
}
.meta-data .vehicle-details {
  padding: 1rem;
  border-radius: 1em;
  background-color: whitesmoke;
  width: 50%;
  height: 95%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(90, 89, 89);
  font-size: small;
}
.vehicle-details .vehicle-meta {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 99%;
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
  justify-content: flex-start;
  align-items: center;
}
.form-inner {
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-inner .dropdown-locations {
  /* height: 60%; */
  padding: 2rem;
  width: 95%;
  border-radius: 1em;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.init-ride-btn {
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
.select-date-time,
.select-seating-capacity {
  background-color: whitesmoke;
  border-radius: 1em;
  width: 90%;
  height: 70vh;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* overflow: scroll; */
}

.select-seating-capacity {
  padding: 1rem;
}

.select-date,
.select-time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.select-seating-capacity {
  width: 97%;
  height: 20vh !important;
}
.select-date-tag,
.select-time-tag {
  padding: 1rem;
  font-size: medium;
}

@media screen and (max-width: 850px) {
  .user-header .avatar {
    padding: 0.5rem;
  }
  .user-header .avatar img {
    max-width: 3rem;
    border-radius: 50%;
  }
  .user-header .meta-data {
    border-radius: 1em;
    width: 95%;
    background-color: rgb(235, 235, 235);
    padding: 0.5rem;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
  }
  .meta-data .user-details {
    padding: 0.5rem;
    border-radius: 1em;
    background-color: whitesmoke;
    width: 100%;
    height: 50%;
    font-size: xx-small !important;
  }
  .user-details .phonenumber-tag {
    font-size: xx-small !important;
  }
  .user-details .address-tag {
    display: none;
  }
  .v-application p {
    margin: 0 !important;
  }
  .meta-data .vehicle-details {
    padding: 1rem;
    border-radius: 1em;
    background-color: whitesmoke;
    width: 100%;
    height: 50%;
    margin: 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(90, 89, 89);
    font-size: xx-small;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
  }
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

  .select-date-time,
  .select-seating-capacity {
    background-color: whitesmoke;
    border-radius: 1em;
    width: 90%;
    height: 120vh;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>