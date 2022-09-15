import preloaderMixin from "@/mixins/preloader.mixin";
import mapsMixin from "@/mixins/maps.mixin";
import preloaderComponent from "@/components/customComponent/preloaderComponent.vue";
import Vue from "vue";

export default {
  name: "FindPoolComponent",
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
    };
  },
  components: {
    preloaderComponent,
  },
  mixins: [preloaderMixin, mapsMixin],
  created() {
    this.getUserLocation();
    Vue.$toast.open({
      message: "Finding nearby pool rides...",
      type: "default",
      duration: 2000,
    });
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
      return this.menu;
    },
    resetUserLocation() {
      this.user.latitude = this.user.longitude = null;
    },
    bookPoolRide() {
      Vue.$toast.open({
        message: "Pool Ride Booked!",
        type: "success",
        duration: 2000,
      });
    },
  },
};
