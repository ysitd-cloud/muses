import { storiesOf } from '@storybook/vue';
import LoginPage from '../../src/pages/auth/Login.vue';

storiesOf('Pages/Auth', module)
  .add('Login', () => ({
    components: { LoginPage },
    template: '<login-page />',
  }));
