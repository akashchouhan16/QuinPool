<template>
  <div class="home-container">
    <v-container class="loading-container" v-if="isLoading">
      <p class="text-h5">loading...</p>
    </v-container>
    <div class="main-container" v-else>
      <h2>Welcome to QuinPool</h2>

      <div class="child-main-container">
        <img
          src="@/assets/108929-drive-blue.gif"
          alt="car-pool-app"
        />

        <div class="home-btns">
          <v-btn elevation="2" @click="initiatePool()" color="secondary"
            >Initiate A Pool</v-btn
          >
          <v-btn elevation="2" color="success" @click="findPool()"
            >Find a Pool</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/HomeComponent.js"></script>

<style scoped>
.main-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-radius: 1em;
  padding: 1em;
  flex-wrap: nowrap;
  align-content: center;
}
.loading-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
img {
  width: 250px;
  min-width: 20rem;
  margin-bottom: 1em;
}
.home-btns {
  width: 30rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
}
.child-main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid whitesmoke;
  padding: 1em;
  border-radius: 1em;
}
.child-main-container>img{
  border-radius: 1em;
}

v-btn {
  margin: 1em;
}

@media screen  and (max-width: 450px){

  .child-main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid whitesmoke;
    padding: 1em;
    border-radius: 1em;
    width: 83vw;
    height: 68vh;
  }
  .home-btns {
    width: 30rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    height: 15vh;
  }
  img{
    min-width: 12rem !important;
    margin-bottom: 1em;
  }
}
</style>