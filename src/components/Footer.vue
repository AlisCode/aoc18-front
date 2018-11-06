<template>
    <v-layout class="footer-bg">
        <v-flex class="copyright" xs2>
            <p>Licensed under <br/>CC BY-SA 2.0</p>
            <span>
                    <img src="https://creativecommons.org/images/deed/cc_icon_white_x2.png" alt="cc">
                    <img src="https://creativecommons.org/images/deed/attribution_icon_white_x2.png" alt="by">
                    <img src="https://creativecommons.org/images/deed/sa_white_x2.png" alt="sa">
                </span>
        </v-flex>

        <v-flex class="copy-author" justify-center align-left xs2>
                <span>
                <a href="https://github.com/aliscode">@aliscode</a>
                front + back
                </span>
            <span>
                <a href="https://github.com/gobanos">@gobanos</a>
                aoc-crates + server
                </span>
        </v-flex>

        <v-spacer/>

        <v-flex class="rust-logo" xs1 justify-center align-center>
            <a href="https://www.rust-lang.org/en-US/">
                <RustLogo class="rust-logo"/>
            </a>
        </v-flex>

        <v-spacer/>

        <v-flex xs2 justify-center align-center class="link-footer">
            <a href="mailto:oliv.pinon@gmail.com">Contact</a>
        </v-flex>

        <v-flex xs2 justify-center align-center class="link-footer">
            <router-link to="/about">About</router-link>
        </v-flex>
    </v-layout>
</template>

<script>

    import RustLogo from '../assets/rust-logo.svg';

    export default {
        name: "Footer",
        components: {
            RustLogo
        }
    }
</script>

<style scoped lang="scss">

    .footer-bg {
        background-color: #2c2c2c;
        color: #EEEEEE;
        max-height: 8.5em;
        padding: 1em;
    }

    .copyright {

        text-align: center;
        font-weight: bold;

        & img {
            width: 2em;
            height: 2em;
            margin: 0.25em;
        }
    }

    .copy-author a {
        color: #EEEEEE;
        text-decoration: none;
    }

    .copy-author {
        font-weight: bold;
        display: flex;
        flex-direction: column;
    }

    .rust-logo {
        width: 75px;
        height: 75px;

        & path {
            fill: #EEEEEE;
            stroke: #EEEEEE;
        }
    }

    .link-footer {
        display: flex;
        text-align: center;

        & a {
            font-weight: bold;
            color: #EEEEEE;
            text-decoration: none;
        }
    }
</style>