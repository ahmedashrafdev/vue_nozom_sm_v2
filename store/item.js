import http from "../repositories/Http.js";
export const state = () => ({
    loading :false,
    storeLaoding:false,
    
  })
  
export const mutations = {
    loading(state , payload){
        state.laoding = payload
    },
    storeLoading(state , payload){
        state.storeLaoding = payload
    },
   
    
}

  
export const getters = {
    loading(state) {
        return state.loading
    },
    storeLaoding(state) {
        return state.storeLaoding
    }
    
}
  

export const actions = {
    get({commit} , payload) {
        commit('loading' , true)
        payload.StoreCode = parseInt(localStorage.getItem('store'))
        return new Promise((resolve, reject) => {
            http
            .post("get-item" , payload)
            .then(res => {
                commit('loading' , false)
                resolve(res.data);
            })
            .catch(e => {
                commit('loading' , false)
                reject(e.response.data);
            })
        })
    },
    store({commit} , payload) {
        commit('storeLoading' , true)
        payload.DevNo = parseInt(localStorage.getItem('device'))
        return new Promise((resolve, reject) => {
            http
            .post("insert-item" , payload)
            .then(res => {
                commit('storeLoading' , false)
                resolve(res.data);
            })
            .catch(e => {
                commit('storeLoading' , false)
                reject(e.response.data);
            })
        })
    },
    
}