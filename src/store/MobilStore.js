import Axios from 'axios'

export default {
    state: {
        mobils: []
    },
    getters: {
        MOBILS : state => {
            return state.mobils;
        }
    },
    mutations: {
        SET_MOBILS: (state, payload) => {
            state.mobils = payload
        }
    },
    actions: {
        getMobils ({commit}) {
            Axios
                .get(config.API_MOBIL)
                .then(response => {
                    commit('SET_MOBILS', response.data)
                }).catch((e) =>{
                    console.log(e)
            })
        },
        addMobil ({commit}, payload) {
            Axios
                .post(config.API_MOBIL, JSON.stringify(payload))
                .then(response=> {
                    console.log(response);
                }).catch((e) =>{
                console.log(e)
            })
        }
    }
}
