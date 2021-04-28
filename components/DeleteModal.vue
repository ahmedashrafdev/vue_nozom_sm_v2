<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="danger mb-2"
          v-bind="attrs"
          v-on="on"
        >
          حذف
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          تاكيد حذف هذا الصنف
        </v-card-title>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="danger"
            text
            @click="remove()"
          >
            تاكيد
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props : ['form'],
    methods:{
        remove(){
            this.$store.dispatch('document/deleteItem' , this.form)
            .then(() => {
                this.dialog = false
                this.$emit('deleted')
            })
        }
    }
  }
</script>