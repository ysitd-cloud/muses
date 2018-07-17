import { storiesOf } from '@storybook/vue';
import YCloudCard from '../../src/components/card/Card.vue';

storiesOf('Components/Card', module)
  .add('basic', () => ({
    components: { YCloudCard },
    template: '<div style="margin: 5px"><y-cloud-card>Test</y-cloud-card></div>',
  }));
