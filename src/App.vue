<template>
    <v-app>
        <Header></Header>

        <v-content>
            <v-slide-y-transition>
                <router-view/>
            </v-slide-y-transition>
        </v-content>

        <Footer></Footer>
        <!-- <v-footer app>
        </v-footer> -->
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
