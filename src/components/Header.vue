<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase logo">
            <router-link to="/">
                <v-layout justify-center align-center>
                    <span>AoC 2018</span>
                    <RustLogo class="rust-logo"/>
                </v-layout>
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
                flat
                to="/scoreboard"
        >
            <span class="mr-2">Scoreboard</span>
        </v-btn>
        <v-btn v-show="!isLogged"
                flat
                to="/login"
        >
            <span class="mr-2">Login</span>
        </v-btn>
    </v-toolbar>
</template>

<script>
import RustLogo from "../assets/rust-logo.svg";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    RustLogo
  },
  computed: {
    ...mapGetters({
      isLogged: "login/is_logged"
    })
  }
};
</script>

<style scoped lang="scss">
.rust-logo {
  width: 50px;
  height: 50px;
}

.logo {
  cursor: pointer;

  & a {
    color: #222222;
    text-decoration: none;
  }
}
</style>