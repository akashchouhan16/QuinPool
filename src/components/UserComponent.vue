<template>
  <div>
    <v-card elevation="2" v-for="index in user" :key=index>{{ user.id}} </v-card>
  </div>
</template>

<script src="./scripts/UserComponent.js">
</script>

<style>
</style>