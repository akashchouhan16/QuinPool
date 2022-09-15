export default {
  name: "MapsMixin",
  data() {
    return {
      user: {
        latitude: null,
        longitude: null,
      },
    };
  },
  methods: {
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
    initMap() {
      const currentLocation = {
        lat: this.user.latitude,
        lng: this.user.longitude,
      };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: currentLocation,
        zoom: 19,
      });

      new window.google.maps.Marker({
        position: currentLocation,
        map,
        label: "Your Location",
      });

      console.warn("initMap() involked");
    },
  },
};
