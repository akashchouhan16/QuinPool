import Vue from "vue";
import preloaderMixin from "@/mixins/preloader.mixin";
import preloaderComponent from "@/components/customComponent/preloaderComponent.vue";
export default {
  name: "HomeComponent",
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    preloaderComponent,
  },
  mixins: [preloaderMixin],
  methods: {
    completeSetUp() {
      Vue.$toast.warning("Setup could not be complete");
    },
    initiatePool() {
      // const userId = localStorage.getItem('userId') === null? this.$store.getters.getUser.userId : localStorage.getItem('userId');
      this.$router.push({
        path: "/initiatepool",
        query: { redirect: `/initiatepool` },
      });
    },
    findPool() {
      // const userId = localStorage.getItem('userId') === null? this.$store.getters.getUser.userId : localStorage.getItem('userId');
      this.$router.push({
        path: "/findpool",
        query: { redirect: `/findpool` },
      });
    },
  },
};
