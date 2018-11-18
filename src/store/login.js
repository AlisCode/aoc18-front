import axios from 'axios';
import Cookies from 'js-cookie';

const state = {
    api_token: null,
    username: null,
    auth_provider: null,
    logging_in: false,
};

const getters = {
    is_logged: (state) => state.api_token !== null && state.username !== null,
    username: (state) => state.username,
    full_username: (state) => state.username + "@" + state.auth_provider,
    user_token: (state) => state.api_token,
    logging_in: (state) => state.logging_in,
};

const actions = {
    actLogin({ commit }, { flash, provider }) {

        if (this.is_logged) {
            return;
        }

        if (!flash.includes("auth_success")) {
            return;
        }

        commit("startLogin");
        let api_token = flash.replace("12auth_success", '');
        Cookies.set("api_token", api_token);
        Cookies.set("auth_provider", provider);
        commit("setAuthProvider", provider);
        commit("setApiToken", api_token);
        Cookies.remove("_flash");

        let url = process.env.VUE_APP_API_URL + "username";
        axios
            .get(url, { withCredentials: true })
            .then((response) => {
                commit("setUsername", response.data)
                commit("endLogin");
            })
    },
    checkLogin({ commit }, payload) {
        let api_token = Cookies.get("api_token");
        let auth_provider = Cookies.get("auth_provider");

        if (api_token == null || auth_provider == null) {
            return;
        }

        let url = process.env.VUE_APP_API_URL + "username";
        axios.get(url, { withCredentials: true })
            .then((res) => {
                commit("setUsername", res.data)
            });

        commit("setApiToken", api_token);
        commit("setAuthProvider", auth_provider);
    }
};

const mutations = {
    startLogin(state) {
        state.logging_in = true;
    },
    endLogin(state) {
        state.logging_in = false;
    },
    setUsername(state, new_username) {
        state.username = new_username;
    },
    setAuthProvider(state, new_provider) {
        state.auth_provider = new_provider;
    },
    setApiToken(state, new_token) {
        state.api_token = new_token;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}