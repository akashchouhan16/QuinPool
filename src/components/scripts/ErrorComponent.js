import preloaderMixin from "@/mixins/preloader.mixin";
import preloaderComponent from "@/components/customComponent/preloaderComponent.vue";

export default {
  name: "ErrorComponent",
  data() {
    return {};
  },
  components: {
    preloaderComponent,
  },
  mixins: [preloaderMixin],
  methods: {
    goBackToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
