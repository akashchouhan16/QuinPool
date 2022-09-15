<template>
  <div class="error-container">
    <preloaderComponent v-if="isLoading"></preloaderComponent>
    <div class="error-message-container" v-else>
      <img src="@/assets/98247-404-error.gif" alt="404, Page Not Found" />
      <p class="error-message">
        No Page Found! :/ <br />
        <v-btn color="black white--text ma-3" @click="goBackToHome()"
          >Go Back</v-btn
        >
      </p>
    </div>
  </div>
</template>

<script src="./scripts/ErrorComponent.js"></script>

<style scoped>
.error-message-container {
  border-radius: 1em;
  background-color: white;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error-message-container img {
  width: 60%;
  border-radius: 1em;
}
.error-message-container v-btn {
  margin-top: 1rem;
}

@media screen and (max-width: 750px) {
  .error-message-container {
    height: 80vh;
  }
}
</style>