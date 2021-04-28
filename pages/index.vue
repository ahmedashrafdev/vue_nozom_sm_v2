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
        this.$router.push({name : 'trolley-check'})
        return
      } 
      if (tab.link === 'settings'){
        this.$router.push({name : "settings"})
        return
      } 
      const query = {
        accountType : tab.accountType,
        type : tab.type,
      }
      this.$router.push({name : 'documents-transaction' , params : {transaction : tab.transSerial} , query})
      
    }
  },
  
  
}
</script>
<style scoped lang="scss" src="@/assets/scss/pages/main.scss"/>