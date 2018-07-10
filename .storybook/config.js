import { configure } from '@storybook/vue';

import Vue from 'vue';

configure(function loadStories() {
  require('../stories');
}, module);
