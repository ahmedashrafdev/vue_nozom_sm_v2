<template>
  <div class="main">
    <v-container>
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
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      tabs : 'ui/tabs'
    })
  },
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
  
  
}
</script>
<style scoped lang="scss" src="@/assets/scss/pages/main.scss"/>