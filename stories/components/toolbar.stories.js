import { storiesOf } from '@storybook/vue';
import { withKnobs, selectV2 } from '@storybook/addon-knobs';
import Toolbar from '../../src/components/toolbar/Toolbar.vue';

storiesOf('Components/Toolbar', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const color = selectV2('Color', {
      Primary: 'primary',
      Secondary: 'secondary',
    }, 'primary');
    return {
      render(h) {
        return h(Toolbar, {
          props: {
            color,
          },
        }, ['Testing']);
      },
    };
  });
