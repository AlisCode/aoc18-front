<template>
    <v-app>
        <Header></Header>

        <v-content>
            <router-view/>
        </v-content>

        <v-footer>
            <Footer></Footer>
        </v-footer>
    </v-app>
</template>

<script>
    import Header from './components/Header';
    import Footer from './components/Footer';

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                //
            }
        }
    }
</script>
