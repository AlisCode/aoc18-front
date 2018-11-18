<template>
    <v-container fluid fill-height class="home-container">

        <v-layout column justify-center align-center fluid>
            <h1>Choose how to login</h1>

            <v-layout row justify-center align-center class="layout-login">
                <v-flex xs4 justify-center align-center>
                    <v-layout column justify-center align-center>
                        <GithubLogo class="solution-logo"/>
                        <v-btn
                                :href="githubLink"
                                replace>
                            Login with Github
                        </v-btn>
                    </v-layout>
                </v-flex>
                <v-flex xs4>
                    <v-layout column justify-center align-center>
                        <GitlabLogo class="solution-logo"/>
                        <v-btn
                            :href="gitlabLink"
                            replace
                        >
                            Login with Gitlab
                        </v-btn>
                    </v-layout>
                </v-flex>
            </v-layout>

        </v-layout>
    </v-container>
</template>

<script>
import GitlabLogo from "../../assets/gitlab-logo.svg";
import GithubLogo from "../../assets/github-logo.svg";

export default {
  name: "Login",
  components: {
    GitlabLogo,
    GithubLogo
  },
  computed: {
    githubLink() {
      return (
        "https://github.com/login/oauth/authorize?client_id=" +
        process.env.VUE_APP_GH_CLIENT_ID
      );
    },
    gitlabLink() {
      return (
        "https://gitlab.com/oauth/authorize?redirect_uri=" +
        process.env.VUE_APP_GL_REDIRECT +
        "&response_type=code&client_id=" +
        process.env.VUE_APP_GL_CLIENT_ID
      );
    }
  }
};
</script>

<style scoped lang="scss">
.layout-login {
  width: 100%;
  max-height: 20em;
}

.solution-logo {
  width: 5em;
  height: 5em;
  margin: 1em;
}
</style>