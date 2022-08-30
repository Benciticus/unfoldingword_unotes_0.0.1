<template>
  <div id="main_content">
    <div v-for="(file, index) in notesFiles" v-bind:id="index+1" class="chapter">
      <!--<a>{{file.name}}</a>-->
      <div v-html="file.content" class="chapter_content"></div>
    </div>
  </div>
</template>

<script>
  
import Chapter from './Chapter.vue'
import chapter1 from '../assets/notes/Notes Gen 1.htm'
import chapter2 from '../assets/notes/Notes Gen 2.htm'

  export default {
    name: "chapter",
    data() {
        return {
            notesFiles: [
                { name: "Notes Gen 1.htm", content: chapter1 },
                { name: "Notes Gen 2.htm", content: chapter2 }
            ]
        };
    },
    components: { Chapter },
    methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
};
</script>

<style lang="scss" scope>
  #main_content {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 12px 0 ;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media(min-width: 1140px){
      max-width: 1140px;
    }
    padding-top: 51px;
  }
  .chapter{
    display: flex;
    flex-direction: column;
    text-align: left;
    transition: .5s ease all;
    width: 100%;
    margin: 0 auto;
  }
  .chapter_content{
    padding-top: 50px;
  }
</style>

