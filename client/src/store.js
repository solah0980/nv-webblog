import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugin: [
        createPersistedState()
    ],
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
    },
    mutation: {
        setToken (state, token) {
            state.token = token
            state.isUserLoggedIn = !!(token)
        },
        setUser (state, user) {
            state.user = user
        }
    },
    action: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user)
        } 
     }  
})