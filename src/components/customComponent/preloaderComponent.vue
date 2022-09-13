<template>
  <div class="preloader" v-if="isLoading">
    <img src="@/assets/85392-carr.gif" alt="loading.." width="250" />
    <p class="text-h5">Loading...</p>
  </div>
</template>

<script>
import preloaderMixin from "@/mixins/preloader.mixin";

export default {
  name: "preloaderComponent",
  data() {
    return {};
  },
  mixins: [preloaderMixin],
};
</script>


<style scoped>
.preloader {
  background-color: white;
  width: 90vw;
  height: 90vh;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>