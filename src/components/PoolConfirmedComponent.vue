<template>
  <div class="pool-confirmation">
    <preloaderComponent></preloaderComponent>
    <!--  -->
    <div class="confirmation-container" v-if="!isLoading">
      <div class="confirmation-animation" v-if="confirmationLoader">
        <img src="@/assets/24847-confirmation.gif" alt="Confirmed" />
        <div class="confirmation-tag">Pool Initiated! :)</div>
      </div>

      <div class="pool-details" v-else>
        <div class="thank-you">
          <img src="@/assets/47956-area-map.gif" alt="Thank You!" />
        </div>
        <div class="details">
          <p class="details-header">Pool Details</p>
          <p class="details-body">
            <span class="details-body-date">Initiated for 14.09.22</span>
            <span class="details-body-time">Starts @ 18:30</span>
            <span class="details-body-pool-rate">Rate: @Rs 10/km</span>
            <span class="details-body-revenue"
              >Estimated Revenue: Rs. 345/-
            </span>
          </p>
          <div class="details-body-btns">
            <v-btn small color="black white--text" @click="saveAsPDF()"
              >Save as PDF</v-btn
            >
            <v-btn small color="error white--text" @click="cancelPool"
              >Cancel Pool</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/PoolConfirmedComponent.js"></script>

<style scoped>
.confirmation-container {
  width: 90vw;
  height: 90vh;
  background-color: white;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.confirmation-container img {
  max-width: 20vw;
}

.pool-details img {
  margin-bottom: 2rem;
  border-radius: 15rem;
}
.confirmation-animation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.confirmation-animation .confirmation-tag {
  margin-top: 1rem;
}

.pool-details {
  background-color: whitesmoke;
  border-radius: 1em;
  width: 95%;
  height: 85vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.details {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.details .details-header {
  font-size: large;
}
.details-body {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: small;
}
.details-body .details-body-date,
.details-body .details-body-time,
.details-body .details-body-revenue,
.details-body .details-body-pool-rate {
  padding: 0.2rem;
  color: rgb(69, 69, 69);
}
.details-body .details-body-revenue {
  font-weight: bold;
}
.details-body-btns {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
@media screen and (max-width: 750px) {
  .pool-details {
    width: 95%;
    height: 90%;
  }
  .details-body-btns {
    width: 100%;
  }
}
</style>