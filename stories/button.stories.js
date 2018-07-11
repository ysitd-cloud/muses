import { storiesOf } from '@storybook/vue';
import YCloudButton from '../src/components/button/Button.vue';

storiesOf('Button', module)
  .add('basic', () => ({
    components: { YCloudButton },
    template: '<div style="margin: 5px"><y-cloud-button>Testing</y-cloud-button></div>',
  }))
  .add('secondary color', () => ({
    components: { YCloudButton },
    template: '<div style="margin: 5px"><y-cloud-button color="secondary">Testing</y-cloud-button></div>',
  }));
