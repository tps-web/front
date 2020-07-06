<template>
 <div>

  
<router-link :to="{path:'/playVideo'}"> to playVideo</router-link>


  </div>
</template>

<script>
import { allSeriesStory } from '../api/index.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
   created(){
    this.getAll()
  },
   methods: {
   getAll(){
       allSeriesStory().then(res=>{
       console.log(res)
       })
    },
    },
    mounted(){
  

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
