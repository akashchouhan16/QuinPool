import preloaderMixin from '@/mixins/preloader.mixin'
import preloaderComponent from '@/components/customComponent/preloaderComponent.vue'
import Vue from 'vue'

export default {
    name: 'InitiatePoolComponent',
    data(){
        return {
            user: {
                latitude: null,
                longitude: null,
              }
        }
    },
    components:{
        preloaderComponent
    },
    created() {
        this.getUserLocation();
        Vue.$toast.open({
          message: 'Initiating a pool ride...',
          type: 'default',
          duration: 2000
      })
    },
    mixins: [preloaderMixin],
    methods:{
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
            let map = new window.google.maps.Map(document.getElementById("map"), {
              center: { lat: this.user.latitude, lng: this.user.longitude },
              zoom: 19,
            });
            console.log(map);
            console.warn("initMap() involked");
          },
    }
}