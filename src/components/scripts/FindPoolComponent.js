import preloaderMixin from "@/mixins/preloader.mixin";
import Vue from "vue";
// import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly'
export default {
  name: "FindPoolComponent",
  data() {
    return {
      user: {
        latitude: null,
        longitude: null,
      },
      fav: true,
      menu: false,
      message: false,
      hints: true,
    };
  },
  mixins: [preloaderMixin],
  created() {
    this.getUserLocation();
  },
  methods: {
    toggleMenu(){
        this.menu = !this.menu;
        return this.menu;
    },
    getUserLocation() {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.table({
            latitude: position.coords.latitude,
            longitute: position.coords.longitude,
          });
          this.user.latitude = position.coords.latitude;
          this.user.longitude = position.coords.longitude;

          this.initMap();
        },
        (error) => {
          console.error(error.message);
        }
      );
    },
    resetUserLocation() {
      this.user.latitude = this.user.longitude = null;
    },
    initMap() {
      let map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: this.user.latitude, lng: this.user.longitude },
        zoom: 19,
      });
      console.log(map);
      console.warn("initMap() involked");
    },
    bookPoolRide(){
        Vue.$toast.open({
            message: 'Pool Ride Booked!',
            type: "success",
            duration: 2000
        })
    }
  },
};
