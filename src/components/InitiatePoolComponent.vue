<template>
    <div class="initiate-pool-container">
        <div class="preloader" v-if="isLoading">
            <p class="text-h5">loading...</p>
        </div>
        <div class="initiate-pool-inner-container" v-else>
            <h1>Initiate A Pool Ride!</h1>
        </div>
    </div>
</template>

<script src="./scripts/InitiatePoolComponent.js"></script>

<style scoped>
    
</style>