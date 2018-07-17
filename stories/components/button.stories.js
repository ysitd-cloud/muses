import { storiesOf } from '@storybook/vue';
import { withKnobs, selectV2 } from '@storybook/addon-knobs';
import YCloudButton from '../../src/components/button/Button.vue';

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const value = selectV2('Color', {
      Primary: 'primary',
      Secondary: 'secondary',
    }, 'primary');
    return {
      components: { YCloudButton },
      render(h) {
        return h('div', {
          style: {
            margin: '5px',
          },
        }, [
          h(YCloudButton, {
            props: {
              color: value,
            },
          }, ['Testing']),
        ]);
      },
    };
  });
