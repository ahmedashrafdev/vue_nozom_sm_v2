export const state = () => ({
    pageTitle:'',
    tabsHeaders : [
      'ادخل الصنف', 'عرض الاصناف',
    ],
    tabs :[
        {
          icon : 'mdi-cart-arrow-down',
          text : 'مشتريات',
          transSerial: 19,
          link : 'buy',
          accountType :2,
          type : 2,
        },
        {
          icon : 'mdi-cash-multiple',
          text : 'مرتجع مشتريات',
          transSerial: 26,
          link : 'buy-return',
          accountType :2,
          type : 2,
        },
        {
          icon : 'mdi-cash-multiple',
          text : 'مبيعات',
          transSerial: 30,
          link : 'sell',
          accountType :1,
          type : 1,
        },
        {
          icon : 'mdi-cash-multiple',
          text : ' مرتجع مبيعات',
          transSerial: 20,
          link : 'sell-return',

          accountType :1,
          type : 1,
        },
        
        
        
        {
          icon : 'mdi-cloud-upload',
          text : ' صرف تحويلات ',
          transSerial: 27,
          link : 'transaction',
          accountType :-1,
          type : 3,
        },
        {
          icon : 'mdi-cloud-upload',
          text : ' استلام تحويلات',
          transSerial: 22,
          link : 'recieve-transaction',
          accountType :-1,
          type : -1,
        },
        {
          icon : 'mdi-cloud-upload',
          text : ' رصيد اول مدة',
          transSerial: 24,
          link : 'first',
          accountType :-1,
          type : -1,
        },
        
        {
          icon : 'mdi-basket',
          text : 'مراجعة اسعار',
          transSerial: -1,
          link : 'trolley-check',
          accountType :-1,
          type : -1,
        },
        {
          icon : 'mdi-package-variant-closed',
          text : 'ادوات الجرد',
          transSerial: 31,
          link : 'inventory',
          accountType :-1,
          type : -1,
        },
        
        
        {
          icon : 'mdi-cog-outline',
          text : "الاعدادات",
          transSerial: '',
          link : 'settings',
          accountType :-1,
          type : -1,
        },
        
      ]
  })
  
export const mutations = {
    pageTitle(state , payload){
        state.pageTitle = payload
    },
    
}

  
export const getters = {
    pageTitle(state) {
        return state.pageTitle
    },
    tabs(state) {
        return state.tabs
    }
}
  