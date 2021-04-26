<template>
  <div class="main">
    <div class="main__wrapper">
      <div class="main__logo">
        <img src="~@/assets/images/logo.png" alt="ELNOZOM">
      </div>
      <div class="main__contnet">
        <div class="main__title">
          <h2>اختر الوظيفة التي تريد القيام بها  ...</h2>
        </div>
        <div class="main__tabs">
          <div  class="tab" v-for="(tab,index) in tabs" :key="index" @click.prevent="goTo(tab)">
            <div class="tab-icon">
              <v-icon large>{{tab.icon}}</v-icon>
            </div>
            <div class="tab-text">{{tab.text}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods :{
    goTo(tab){
      if(tab.link == 'trolley-check'){
        this.$router.push({name : 'trolley-check' , query :{ store : localStorage.getItem('store')}})
      } else if (tab.link == 'first') {
        this.$router.push({name : 'grid-open' , query : {transaction : tab.transSerial , type : tab.type , accountType : tab.accountType}})
      } else if (tab.link === 'settings'){
        this.$router.push({name : "settings"})
      }else if (tab.link === 'logout'){
        document.localStorage.removeItem('auth._token.local')
         this.$router.push({name : "login"})
      } else {
        this.$router.push({name : 'grid-open' , query : {transaction : tab.transSerial , type : tab.type , accountType : tab.accountType}})
      }
    }
  },
  
  data(){
    return {
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
          icon : 'mdi-cog',
          text : 'طباعة ملصق الرف',
          transSerial: '',
          link : '',
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
        {
          icon : 'mdi-logout-variant',
          text : "تسجيل الخروج",
          transSerial: '',
          link : 'logout',
          accountType :-1,
          type : -1,
        }
      ]
      
    }
  }
}
</script>
<style scoped lang="scss" src="@/assets/scss/pages/main.scss"/>