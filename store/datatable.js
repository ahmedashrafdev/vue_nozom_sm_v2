import http from "../repositories/Http.js";
export const state = () => ({
    loading :false,
    datatable: {
        search: "",
        headers: [
          { align: "center", text:'رقم المستند', value: "DocNo" },
          { align: "center", text: 'كود المخزن', value: "StoreCode" },
          { align: "center", text: 'اسم الحساب', value: "AccountName" },
          { align: "center", text: 'الاجرائات', value: 'actions', sortable: false },
        ],
        docs: [],
    },
  })
export const mutations = {
    setLoading(state , payload){
        state.laoding = payload
    },
    setDatatable(state , payload){
        state.datatable.docs = payload;
    },
    
}

  
export const getters = {
    loading(state) {
        return state.loading
    },
    accounts(state) {
        return state.accounts
    },
    datatable(state) {
        return state.datatable;
    },
    
}
  

export const actions = {
    getOpenDocs(ctx, payload) {
        ctx.commit("setLoading", true);
        // commit(mutations.setLoading, true);
        return new Promise((resolve, reject) => {
          http.post("get-docs", payload)
            .then((res) => {
              ctx.commit("setLoading", false);
              ctx.commit("setDatatable", []);
              if (res.data.length > 0) {
                const data = res.data.map((item) => {
                  return {
                    DocNo : item.DocNo,
                    StoreCode : item.StoreCode,
                    AccountName : item.AccountName,
                    StoreCode : item.StoreCode,
                    AccontSerial : item.AccontSerial,
                    AccountCode : item.AccountCode,
                  };
                });
                ctx.commit("setDatatable", data);
                resolve(data);
              }
            })
            .catch((res) => {
              ctx.commit("setLoading", false);
              reject(res);
            });
        });
      },
}