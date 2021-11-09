import { createStore } from 'vuex';

export default createStore({
    state: {
        usd: null,
        eur: null,
        gbp: null
    },
    mutations: {
        saveUsdRate (state, payload) {
            state.usd = payload;
        },
        saveEurRate (state, payload) {
            state.eur = payload;
        },
        saveGbpRate (state, payload) {
            state.gbp = payload;
        }
    },
    getters:{
        getCount(state){
            return state.count
        }
    }
  })