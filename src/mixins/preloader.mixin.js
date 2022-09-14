export default {
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    setInterval(() => {
      this.isLoading = false;
    }, 1500);
  },
};
