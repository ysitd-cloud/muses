import { storiesOf } from '@storybook/vue';
import Toolbar from '../src/components/toolbar/Toolbar.vue';

storiesOf('Toolbar', module)
  .add('color=primary', () => ({
    components: { Toolbar },
    template: '<toolbar>Testing</toolbar>',
  }))
  .add('color=secondary', () => ({
    components: { Toolbar },
    template: '<toolbar color="secondary">Testing</toolbar>',
  }));
