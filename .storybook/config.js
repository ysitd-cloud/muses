import { configure } from '@storybook/vue';

configure(function loadStories() {
  require('../stories');
}, module);
