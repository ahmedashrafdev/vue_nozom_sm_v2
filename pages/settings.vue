<template>
    <v-container>
        <v-list
          three-line
          subheader
        >
            <v-subheader>اختر الفرع الرئيسي</v-subheader>
            <v-list-item>
                <v-select
                    :items="stores"
                    label="اختر الفرع"
                    :loading="storesLoading"
                    item-text="store_name"
                    item-value="store_code"
                    v-model="storeCode"
                    hide-details
                    solo
                    >
                </v-select>
            </v-list-item>
            
            
        </v-list>
        <v-bottom-navigation
            absolute
            horizontal
        >
            <v-btn color="primary" @click.prevent="save()" block>
              <h3 class="white--text"> حفظ</h3>
            </v-btn>
        </v-bottom-navigation>
    </v-container>
</template>
<script>
// const fs = require('fs');
import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        storeCode: parseInt(localStorage.getItem('store')),
        isLoading: false,
      }
    },
    computed: {
      ...mapGetters({
        stores: 'store/stores',
        storesLoading: 'store/loading',
      })

       
    },
    methods: {
        save(){
            localStorage.setItem('store' , this.storeCode)
            this.$router.push({name : 'index'})
            
        }
    },
    mounted(){
        console.log(process.env.VUE_APP_DEFAULT_STORE)
    }
  }
</script>