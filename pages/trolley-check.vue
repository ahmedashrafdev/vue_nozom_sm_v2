<template>
   <div class="buy">
    <v-list
        three-line
        subheader
        >
            <v-subheader>املئ البيانات التالية</v-subheader>
            <v-form :lazy-validation="true" v-model="valid" @submit.prevent="findItem()" ref="form">
                <span v-if="notFoundItem" class="text-danger">عفوا لا يوجد صنف بهذا الكود</span>
                <v-list-item>
                    <v-text-field
                        ref="code"
                        :rules="rules.code"
                        label="الكود"
                        v-model="form.BCode"
                        autofocus
                        @keyup.enter="findItem"
                        class="code"
                        :messages="item.ItemName"
                        solo
                        >
                        <v-icon
                            slot="append"
                            color="primary"
                            class="pointer"
                            @click.prevent="findItem"
                            >
                            mdi-plus
                        </v-icon>
                    </v-text-field>
                </v-list-item>
               
                <v-list-item class="mt-2">
                    <v-simple-table v-if="item.POSPP">
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                السعر الكلي
                            </th>
                            <th class="text-left">
                                السعر الجزئي
                            </th>
                            <th class="text-left">
                                المحتوي
                            </th>
                            <th class="text-left">
                                بالوزن
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            >
                                <td>{{item.POSTP}} ج.م</td>
                                <td>{{item.POSPP}} ج.م</td>
                                <td>{{item.MinorPerMajor}} قطع</td>
                                <td v-if="item.ByWeight">نعم</td>
                                <td v-else>لا</td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </v-list-item>
                <v-list-item>
                <v-btn block @click.prevent="findItem()" color="primary">تاكيد</v-btn>
                </v-list-item>
            </v-form>
        </v-list>
   
   </div>
</template>

<script>

import {codeValidation} from '@/utils/helpers.js'
export default {
    layout:'pages',
    data () {
      return {
        valid: false,
        notFoundItem: false,
        item : {},
        rules : {
            code : codeValidation
        },
        form :{
            BCode : null,
        }
      }
    },
    methods : {
        findItem(){
            console.log('asd')
            if(this.form.BCode !== ''){
                this.$store.dispatch('item/get' , this.form)
            .then(res => {
                if(res !== null){
                    this.item = res[0] 
                    // this.form.ItmS = res[0].Serial
                    this.notFoundItem = false
                } else {
                    this.notFoundItem = true
                    this.item = {}
                }

            })
            }
            // this.$refs.qtyWhole.focus();
        },
        
    },
    
    created(){

        this.$store.commit('ui/pageTitle' , 'رصيد اول مدة')
    },
}
</script>