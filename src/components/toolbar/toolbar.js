import color from '../../mixins/bg';

const staticClasses = ['toolbar'];

export default {
  name: 'YCloudToolbar',
  mixins: [color],
  computed: {
    classes() {
      return [
        ...staticClasses,
        ...this.themeClass,
      ];
    },
  },
};
