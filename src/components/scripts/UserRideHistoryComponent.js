import preloaderMixin from "@/mixins/preloader.mixin";
import preloaderComponent from "@/components/customComponent/preloaderComponent.vue";

import history  from "@/mocks/userhistory";
import Vue from "vue";

export default {
  name: "UserRideHistoryComponent",
  data() {
    return {
      items: history,
      viewSeachBar: false
    };
  },
  components: {
    preloaderComponent,
  },
  mixins: [preloaderMixin],
  methods: {
    deleteHistory(){
        Vue.$toast.open({
            message: 'Deleting ride history...',
            type: 'default',
        })
    },
    toggleSearchBar(){
        this.viewSeachBar = !this.viewSeachBar;
    }
  },
};
