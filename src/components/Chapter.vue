<template>
  <meta charset="utf-8"/>
  <div v-html="html" class="chapter"></div>
</template>

<script>
import html from '../assets/Notes Gen 1.htm'

  export default {
    name: "home",
    components:{
      
    },
    data(){
      return{
        html,
        foo: null
      }
    },
    mounted(){
      // this.foo = require('./Gen1.html')
    }

};
</script>


<style>

</style>