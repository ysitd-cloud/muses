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
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </div>
  </form>
</template>

<style scoped>
  form {
    margin: 5px;
  }
</style>

<script>
export default {
  name: 'AuthLoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
