<template>
    <v-container fluid fill-height class="home-container">
        <v-layout column justify-center align-center>

            <v-layout row wrap class="aoc-div" xs4>
                <v-flex column wrap class="text-aoc-div">
                    <h1>Advent of Code</h1>
                    <v-layout>
                        <v-spacer/>
                        <span id="bar-aoc-year"></span>
                        <h2 id="year">2018</h2>
                    </v-layout>
                </v-flex>
                <v-spacer/>
                <v-flex>
                    <RustLogo class="rust-logo"/>
                </v-flex>
            </v-layout>

            <v-flex>
            </v-flex>
            <h1 class="hint-title">Rust Benchmarking platform for AoC 2018 </h1>
            <v-spacer/>
        </v-layout>
    </v-container>
</template>

<script>
import RustLogo from "../assets/rust-logo.svg";

export default {
  components: {
    RustLogo
  }
};
</script>

<style scoped lang="scss">
.hint-title {
  color: #666666;
}

.aoc-div {
  max-width: 25em;
  justify-content: center;
  align-items: center;
}

.text-aoc-div {
  font-weight: bold;
  max-width: 14em;
  text-align: right;
}

.rust-logo {
  width: 10em;
  height: 10em;
}

#bar-aoc-year {
  display: block;
  min-width: 2px;
  height: 2em;
  margin-right: 1em;
  background-color: #888888;
}
</style>
