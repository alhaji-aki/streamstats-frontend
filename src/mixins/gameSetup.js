import axios from "axios";

export default {
  props: {
    endpoint: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      streams: [],
      loading: false,
    };
  },
  methods: {
    async loadData() {
      this.loading = true;

      await axios
        .get(`${this.endpoint}`)
        .then((res) => {
          this.streams = res.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally((this.loading = false));
    },
  },
};
