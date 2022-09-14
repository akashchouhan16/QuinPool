import preloaderComponent from "@/components/customComponent/preloaderComponent.vue";
import preloaderMixin from "@/mixins/preloader.mixin";
import Vue from "vue";

export default {
  name: "PoolConfirmedComponent",
  data() {
    return {
      confirmationLoader: true,
    };
  },
  components: {
    preloaderComponent,
  },
  mixins: [preloaderMixin],
  created() {},
  watch: {
    isLoading(isLoading) {
      if (!isLoading) {
        this.flag = false;
        this.confirmationLoader = true;
        setInterval(() => {
          this.confirmationLoader = false;
        }, 3500);
      }
    },
  },
  methods: {
    saveAsPDF() {
      window.print();
    },
    cancelPool() {
      Vue.$toast.open({
        message: "Pool ride has been cancelled.",
        type: "error",
      });
    },
  },
};
