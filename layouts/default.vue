<template>
  <v-app>
    <v-main>
        <nuxt />
    </v-main>
  </v-app>
</template>
<script>

export default {
  created(){
    this.$store.dispatch('store/get')
  },
  mounted(){
    !localStorage.getItem('device') 
    ? localStorage.setItem('device' ,this.$config.device)
    : ''

    !localStorage.getItem('store') 
    ? localStorage.setItem('store' ,this.$config.store)
    : ''
  }
}
</script>