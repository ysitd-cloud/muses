export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
  computed: {
    themeClass() {
      return [`${this.color}-background`];
    },
  },
};
