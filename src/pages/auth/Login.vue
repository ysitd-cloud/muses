<template>
  <form method="post">
    <div>
      <label for="username">Username</label>
      <input id="username" type="text" name="username" v-model="username">
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" type="password" name="password" v-model="password">
    </div>
    <div>
      <y-cloud-button type="submit">Submit</y-cloud-button>
      <y-cloud-button color="secondary" type="reset">Reset</y-cloud-button>
    </div>
  </form>
</template>

<style scoped>
  form {
    margin: 5px;
  }
  div {
    margin: 5px 0;
  }
</style>

<script>
export default {
  name: 'AuthLoginPage',
  components: {
    YCloudButton: () => import('../../components/button/Button.vue'),
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
