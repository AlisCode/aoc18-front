<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase logo">
            <v-layout justify-center align-center>
                <span>AoC 2018</span>
                <RustLogo class="rust-logo"/>
            </v-layout>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
                flat
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
        >
            <span class="mr-2">Scoreboard</span>
        </v-btn>
        <v-btn
                flat
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
        >
            <span class="mr-2">Login</span>
        </v-btn>
    </v-toolbar>
</template>

<script>

    import RustLogo from '../assets/rust-logo.svg';

    export default {
        name: "Header",
        components: {
            RustLogo,
        }
    }
</script>

<style scoped>

    .rust-logo {
        width: 50px;
        height: 50px;
    }

    .logo {
        cursor: pointer;
    }

</style>