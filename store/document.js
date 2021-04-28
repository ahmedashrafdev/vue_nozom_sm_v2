import http from "../repositories/Http.js";
export const state = () => ({
    loading :false,
    items :[],
    noLaoding:false,
    
  })
  
export const mutations = {
    setLoading(state , payload){
        state.laoding = payload
    },
    setNoLoading(state , payload){
        state.storeLaoding = payload
    },
    setItems(state , payload){
        state.items = payload
    },
   
    
}

  
export const getters = {
    loading(state) {
        return state.loading
    },
    items(state) {
        return state.items
    },
    noLoading(state) {
        return state.noLaoding
    }
    
}
  

export const actions = {
   getNo({commit} , payload){
    commit('setNoLoading' , true)
    payload.DevNo = parseInt(localStorage.getItem('device'))
    payload.StoreCode =  parseInt(localStorage.getItem('store'))
    return new Promise((resolve, reject) => {
        http
        .post("get-doc" , payload)
        .then(res => {
            
            commit('setNoLoading' , false)
            resolve(res.data);
        })
        .catch(e => {
            commit('setNoLoading' , false)
            reject(e.response.data);
        })
    })
   },
   get({commit} , payload){
    commit('setNoLoading' , true)
    payload.DevNo = parseInt(localStorage.getItem('device'))
    return new Promise((resolve, reject) => {
        console.log(res.data)
            if(res.data == null){
                res.data = []
            }
        http
        .post("get-docs" , payload)
        .then(res => {
            commit('setLoading' , false)
            resolve(res.data);
        })
        .catch(e => {
            commit('setLoading' , false)
            reject(e.response.data);
        })
    })
   },
   getItems({commit} , payload){
        commit('setLoading' , true)
        payload.DevNo = parseInt(localStorage.getItem('device'))
        return new Promise((resolve, reject) => {
            http
            .post("get-doc-items" , payload)
            .then(res => {
                commit('setLoading' , false)
                commit('setItems' , res.data)
                resolve(res.data);
            })
            .catch(e => {
                commit('setLoading' , false)
                reject(e.response.data);
            })
        })
   },
   deleteItem({} , payload) {
        return new Promise((resolve, reject) => {
            http
            .post("delete-item" , payload)
            .then(res => {
                // dispatch('get' , false)
                resolve(res.data);
            })
            .catch(e => {
                commit('setStoreLoading' , false)
                reject(e.response.data);
            })
        })
    },
    close({commit} , payload){
        commit('closeLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post("close-doc" , payload)
            .then(res => {
                commit('closeLoading' , false)
                resolve(res.data);
            })
            .catch(e => {
                commit('closeLoading' , false)
                reject(e.response.data);
            })
        })
       },
}