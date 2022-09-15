import preloaderMixin from "@/mixins/preloader.mixin";
import mapsMixin from "@/mixins/maps.mixin";
import preloaderComponent from "@/components/customComponent/preloaderComponent.vue";
import Vue from "vue";

import { getUser } from "@/services/user.service";

export default {
  name: "InitiatePoolComponent",
  data() {
    return {
      locations: ["Caledon Square", "Syndicate Space", "399, Tidel Park"],
      userInfo: {},
      spinLoader: true,
      poolDate: null,
      poolTime: null,
      seatCapacity: null,
      dialog: false,
      isInitiateBtnActive: false,
    };
  },
  components: {
    preloaderComponent,
  },
  created() {
    setTimeout(() => {
      this.spinLoader = false;
    }, 2500);

    const userId = localStorage.getItem("userId");
    getUser({
      success: (response) => {
        this.userInfo = response.data;
      },
      error: (e) => {
        console.warn(
          "Something went wrong while fetching details from backend." + e
        );
      },
      object: userId,
    });

    this.getUserLocation();
    Vue.$toast.open({
      message: "Initiating a pool ride...",
      type: "default",
      duration: 2000,
    });
  },
  mixins: [preloaderMixin, mapsMixin],
  computed: {
    validateTime() {
      let time = "00:00";
      if (
        this.poolDate === null ||
        this.poolDate.substr(8, 2) === new Date().toLocaleString().substr(0, 2)
      ) {
        //same date
        time = new Date().toLocaleString().substr(11, 6);
      }
      console.log(time);
      return time;
    },
  },
  methods: {
    getMaxDate() {
      let date = new Date();
      date.setDate(date.getDate() + 7);

      return date.toISOString().substr(0, 10);
    },
    savePoolDetails() {
      if (
        this.seatCapacity === null ||
        this.poolDate === null ||
        this.poolTime === null
      ) {
        Vue.$toast.open({
          message: "Please select all values",
          type: "error",
        });
        this.isInitiateBtnActive = false;
      } else if (!this.isValidTime()) {
        Vue.$toast.open({
          message: "Invalid Time!",
          type: "error",
        });
      } else {
        Vue.$toast.open({
          message: "Pool Details Saved!",
          type: "success",
          duration: 2000,
        });
        this.dialog = false;
        console.warn({
          seatCapacity: this.seatCapacity,
          time: this.poolTime,
          date: this.poolDate,
        });
        this.isInitiateBtnActive = true;
      }
    },

    initiatePool() {
      this.$router.push({
        path: "/initiatepool/confirmation",
        query: { userId: this.userInfo.id },
      });

      Vue.$toast.open({
        message: "Initiated Pool Ride!",
        type: "success",
      });
    },

    isValidTime() {
      console.warn(this.poolDate + "->" + this.poolDate.substr(8, 2));

      if (
        this.poolDate.substr(8, 2) !=
        new Date().toLocaleString().substring(0, 2)
      ) {
        return true;
      } else {
        console.table({
          poolTime: this.poolTime.substring(0, 2),
          time: new Date().toLocaleString().substr(12, 2),
        });

        if (
          this.poolTime.substring(0, 2) <
            new Date().toLocaleString().substr(12, 2) &&
          this.poolTime.substring(3, 5) <=
            new Date().toLocaleString().substr(15, 2)
        )
          return false;
        return true;
      }
    },
  },
};
