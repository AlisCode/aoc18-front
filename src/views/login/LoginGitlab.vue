<template>
    <h1>Login Gitlab</h1>
</template>

<script>
import Cookies from "js-cookie";
import { mapActions } from "vuex";

export default {
  name: "LoginGitlab",
  methods: {
    ...mapActions({
      actLogin: "login/actLogin"
    })
  },
  mounted() {
    let flash = Cookies.get("_flash");
    if (flash != null) {
      this.actLogin({ provider: "Gitlab", flash: flash });
    }
  }
};
</script>

<style scoped>
</style>