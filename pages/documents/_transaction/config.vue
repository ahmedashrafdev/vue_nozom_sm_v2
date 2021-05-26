<template>
   
     <div>
        <v-toolbar
          dark
          color="primary"
        >
        
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click.prevent="save()"
            >
              حفظ
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container>
            <v-list
            three-line
            subheader
            >
                <!-- check if tranasction -->
              <v-list-item v-if="$route.query.type === 3">
                  <v-select
                      :items="stores"
                      :loading="storesLoading"
                      label="  اختر الفرع الاخر"
                      item-text="store_name"
                      item-value="store_code"
                      v-model="query.storeTo"
                      hide-details
                      solo
                      >
                  </v-select>
              </v-list-item>
                <!-- check if not tranasction -->
                <div  v-if="$route.query.type !== 3">

              <v-list-item>
                  <v-text-field hide-details label="ادخل كود الحساب" ref="code" :loading="accountsLoading" @keyup.enter="find()" v-model="form.Code" solo></v-text-field>
                    </v-list-item>
                    <h1 class="text-center mb-4">او</h1>
                    <v-list-item>
                        <v-autocomplete
                        
                            v-model="form.Code"
                            :items="accounts"
                            :loading="accountsLoading"
                            :search-input.sync="search"
                            @change="changed"
                            color="white"
                            item-text="AccountName"
                            item-value="AccountCode"
                            label="اختر الحساب"
                            placeholder="ابدا بكتابة اسم الحساب"
                            return-object
                            solo
                        ></v-autocomplete>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field label="ادخل رقم الفاتورة" @keyup.enter="save()" ref="invoice" :loading="accountsLoading" v-model="query.InvoiceNo" solo></v-text-field>
                    </v-list-item>
                </div>
            </v-list>
        </v-container>
        <v-bottom-navigation
            absolute
            horizontal
        >
            <v-btn color="primary" @click.prevent="save()" block>
              <h3 class="white--text"> حفظ</h3>
            </v-btn>
        </v-bottom-navigation>
    </div>
   
</template>
<script>
import { mapGetters , mapMutations } from 'vuex'
  export default {
    data () {
      return {
            query : {
                storeTo:0,
                InvoiceNo : null,
                accSerial: null,
            },
            form :{
              Code : null,
              Name : null,
              Type : parseInt(this.$route.query.accountType),
            },
            descriptionLimit: 60,
            entries: [],
            model: null,
            search: null,
      }
    },
    computed: {
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          const Description = entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description

          return Object.assign({}, entry, { Description })
        })
      },
      ...mapGetters({
        stores: 'store/stores',
        storesLoading: 'store/loading',
        accounts: 'account/accounts',
        accountsLoading: 'account/loading',
      })

       
    },
    methods: {
      changed(val){
        if(val !== null){
          this.form.Code = val.AccountCode
        }
      },
      save(){
        const payload = { "TrSerial" : parseInt(this.$route.params.transaction) }
        let params = {doc : null , transaction : this.$route.params.transaction}
        this.$store.dispatch('document/getNo' , payload)
            .then(res => {
              params.doc = res
              this.$router.push({name:'documents-transaction-doc' , params , query : this.query})
            })
              // console.log(params)
      },
      find(){
        let payload = {
          Name : null,
          Code : parseInt(this.form.Code),
          type : this.form.Type
        }
        this.getAccount(payload).then(res => {
          if(res !== null){
            this.$refs.invoice.focus()
            this.form.Code = parseInt(this.form.Code)
            this.query.accSerial = res[0].Serial
          }
        })
        
      },
      ...mapMutations({
        toggle: 'ui/buyModal' // map `this.add()` to `this.$store.commit('increment')`
      }),
        getAccount(payload){
          
          return new Promise((resolve) => {
            this.$store.dispatch('account/get' , payload)
            .then(res => {
              resolve(res)
            })

          })
          
        }
    },
    watch: {
      search () {
        // Items have already been loaded
        if (this.items.length > 1) return

        // Items have already been requested
        if (this.accountsLoading) return
        let payload = {
          Name : this.search,
          Code : 0,
          type : this.form.Type
        }
        // console.log(payload)
        this.getAccount(payload)
      },
    },


  }
</script>