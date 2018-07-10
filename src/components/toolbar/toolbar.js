import color from '../../mixins/bg';

const staticClasses = ['toolbar'];

export default {
  name: 'Toolbar',
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
