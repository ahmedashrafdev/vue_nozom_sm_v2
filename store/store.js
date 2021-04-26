import http from "../repositories/Http.js";

export const state = () => ({
    loading :false,
    stores:[],
})
  
export const mutations = {
    loading(state , payload){
        state.laoding = payload
    },
    stores(state , payload){
        state.stores = payload
    },
    
}

  
export const getters = {
    loading(state) {
        return state.loading
    },
    stores(state) {
        return state.stores
    },
}
  

export const actions = {
    get({commit}) {
        commit('loading' , true)
        return new Promise((resolve, reject) => {
            http
            .get("cashtry/stores")
            .then(res => {
                commit('stores' , res.data)
                commit('loading' , false)
                resolve(res.data);
            })
            .catch(e => {
                commit('loading' , false)
                reject(e.response.data);
            })
        })
    },
}