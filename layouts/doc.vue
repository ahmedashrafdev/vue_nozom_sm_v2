<template>
    <v-app id="inspire">
        

        <v-app-bar app color="primary">

        <v-toolbar-title>
          {{pageTitle}}
        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn block @click.prevent="closeDocument" text>
        <span style="color:#fff; font-size:20px">غلق المستد</span>
        <v-icon>mdi-save</v-icon>
        </v-btn>
        </v-toolbar-items>
        </v-app-bar>

        <v-main>
            <nuxt />
        </v-main>


    </v-app>
    
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    
    data: () => ({ value: 1 }),
    computed:{
       ...mapGetters({
        pageTitle: 'ui/pageTitle'
      })
    },
    methods:{
      closeDocument(){
        const payload = {
          DevNo: parseInt(localStorage.getItem('device')),
          trans: parseInt(this.$route.params.transaction),
          DocNo : parseInt(this.$route.params.doc),
        }
        this.$store.dispatch('document/close' , payload)
        .then(() => {
          this.$router.push({name : 'index'})
        })
      }
    },
    mounted(){
      !localStorage.getItem('device') 
      ? localStorage.setItem('device' ,1)
      : ''
    }
  }
</script>