import Vue from 'vue';
import LoginPage from '../../pages/auth/Login.vue';

const element = document.getElementById('root');

if (element && element !== null) {
  new Vue({
    render(h) {
      return h(LoginPage, {
        props: {
          error: element.getAttribute('data-error'),
        },
      });
    },
  }).$mount(element);
}
