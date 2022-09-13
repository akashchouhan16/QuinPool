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
          ></v-progress-circular>
          <v-btn color="secondary">Initiate Ride</v-btn>
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
    justify-content: space-around;
    align-items: center;
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
  .map, #map {
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