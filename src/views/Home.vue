<template>
    <v-container fluid class="home-container">
        <v-layout column justify-center align-center>

            <v-layout row wrap class="aoc-div" xs4>
                <v-flex column wrap class="text-aoc-div">
                    <h1>Advent of Code</h1>
                    <v-layout>
                        <span id="bar-aoc-year"></span>
                        <v-spacer/>
                        <h2 id="year">2018</h2>
                    </v-layout>
                </v-flex>
                <v-spacer/>
                <v-flex>
                    <RustLogo class="rust-logo"/>
                </v-flex>
            </v-layout>

            <h1 class="hint-title">Rust Benchmarking platform for AoC 2018 </h1>
        </v-layout>
    </v-container>
</template>

<script>

    import RustLogo from '../assets/rust-logo.svg';

    export default {
        components: {
            RustLogo,
        }
    }
</script>

<style scoped lang="scss">

    .hint-title {
        color: #555555;
        margin: 2em;
    }

    .aoc-div {
        max-width: 25em;
    }

    .text-aoc-div {
        font-weight: bold;
        max-width: 14em;
        text-align: right;
    }

    .rust-logo {
        width: 100px;
        height: 100px;
    }

    #bar-aoc-year {
        display: block;
        min-width: 2px;
        height: 2em;
        background-color: #888888;
    }

</style>
