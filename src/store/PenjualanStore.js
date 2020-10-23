import Axios from 'axios'

export default {
    state: {
        penjualan: []
    },
    getters: {
        PENJUALAN : state => {
            return state.penjualan;
        }
    },
    mutations: {
        SET_PENJUALAN: (state, payload) => {
            state.penjualan = payload
        }
    },
    actions: {
        getPenjualan ({commit}) {
            Axios
                .get(config.API_PENJUALAN)
                .then(response => {
                    commit('SET_PENJUALAN', response.data)
                }).catch((e) =>{
                console.log(e)
            })
        },
        addPenjualan ({commit}, payload) {
            Axios
                .post(config.API_PENJUALAN, JSON.stringify(payload), {'headers': {'Content-Type': 'application/json'}})
                .then(response=> {
                    console.log(response);
                }).catch((e) =>{
                console.log(e)
            })
        }
    }
}
