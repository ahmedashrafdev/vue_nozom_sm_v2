<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="data-table-header">
          <!-- <h1>{{ $t("cashtray_report") }}</h1>
          <p class="desc">{{ $t("cashtray_desc") }}</p> -->
        </div>
        <v-card> 
          <v-data-table
            :headers="datatable.headers"
            :items="datatable.docs"
            :search="datatable.search"
            :loading="loading"
            hide-default-footer
            disable-pagination
            dense
          >
            <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title>المستندات المفتوحة</v-toolbar-title>
                    
                    <v-divider
                    class="mx-4"
                    inset
                    vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <!-- <buy-modal v-if="$route.query.type !== -1"/> -->
                    <v-btn  @click.prevent="create()" >مستند جديد</v-btn>
                   
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <span v-if="item.closed"></span>
                    
              <v-btn color="primary"  class="mr-2"
                    @click="editItem(item)">
                     <v-icon
                    small
                   
                >
                    mdi-pencil
                </v-icon>
                تعديل
              </v-btn>
               
                </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

// import { GET_CASHTRAY } from "@/store/cashtray.module";
export default {
  computed: {
    ...mapGetters("datatable", [
      "loading", // -> this.someGetter
      "datatable", // -> this.someOtherGetter
    ]),
  },
  methods: {
    getOpenDocs() {
        this.$store.dispatch("datatable/getOpenDocs", {TrSerial : parseInt(this.$route.params.transaction)});
    },
    test(){
      console.log('test')
    },
    create(){

      if(this.$route.query.type != -1){
        this.$router.push({name : 'documents-transaction-config' , params : this.$route.params ,query : this.$route.query})
        return
      } 
      const payload = { "TrSerial" : parseInt(this.$route.params.transaction) }
      let params = {"transaction" : this.$route.params.transaction , doc : null}
      this.$store.dispatch('document/getNo' , payload)
          .then(res => {
            params.doc = res
            // console.log(params)
            this.$router.push({name:'documents-transaction-doc' , params , query : this.$route.query })
          })
    },
    editItem(item){
        // console.log(item.AccontSerial)
        let params = {transaction : this.$route.params.transaction , doc : item.DocNo}
        this.$router.push({name:'documents-transaction-doc' , params , query : this.$route.query })
    }
  },

  created() {
    this.getOpenDocs();
  },
};
</script>
