<template>
    <v-container fluid fill-height class="home-container">

        <v-layout column justify-center align-center fluid>
          <div class="loading" v-show="loggingIn">
            <h1>Logging you in with Github ...</h1>
            <v-progress-circular class="progress"
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </div>
          <div class="doneLogin" v-show="is_logged">
            <h1>Hi {{ username }} !</h1>
          </div>
        </v-layout>
    </v-container>
</template>

<script>
import Cookies from "js-cookie";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginGithub",
  methods: {
    ...mapActions({
      actLogin: "login/actLogin"
    })
  },
  computed: {
    ...mapGetters({
      username: "login/username",
      loggingIn: "login/logging_in",
      is_logged: "login/is_logged"
    })
  },
  mounted() {
    let flash = Cookies.get("_flash");
    if (flash != null) {
      this.actLogin({ provider: "Github", flash: flash });
    }
  }
};
</script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.progress {
  margin: 1em;
}
</style>