<template>
 <div class="home-container">
    <v-container v-if="isLoading">
    <v-row>
      <v-col
        cols="6"
        md="6"
      >
        <v-skeleton-loader
          type="card-avatar, article, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
          type="date-picker"
        ></v-skeleton-loader>
      </v-col>

      <v-col
        cols="6"
        md="6"
      >
        <v-skeleton-loader
          
          type="article, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
          type="table-heading, list-item-two-line, image, table-tfoot"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
    <div class="main-container" v-else>
        <h1>Welcome to QuinPool</h1>
    </div>
   
 </div>
 
</template>

<script src="./scripts/HomeComponent.js"></script>

<style scoped>

</style>