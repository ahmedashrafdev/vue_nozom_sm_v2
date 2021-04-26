import http from "../repositories/Http.js";
export const state = () => ({
    loading :false,
    accounts:[],
  })
  
export const mutations = {
    setLoading(state , payload){
        state.laoding = payload
    },
    setAccounts(state , payload){
        state.accounts = payload
    },
    
}

  
export const getters = {
    loading(state) {
        return state.loading
    },
    accounts(state) {
        return state.accounts
    },
}
  

export const actions = {
    get({commit} , payload) {
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post("get-account" , payload)
            .then(res => {
                commit('setAccounts' , res.data)
                commit('setLoading' , false)
                resolve(res.data);
            })
            .catch(e => {
                commit('setLoading' , false)
                reject(e.response.data);
            })
        })
    },
}