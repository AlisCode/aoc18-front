<template>
    <v-app>
        <Header></Header>

        <v-content>
            <v-slide-y-transition>
                <router-view/>
            </v-slide-y-transition>
        </v-content>

        <Footer></Footer>
    </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      //
    };
  },
  methods: {
    ...mapActions({
      checkLogin: "login/checkLogin"
    })
  },
  mounted() {
    this.checkLogin();
  }
};
</script>
