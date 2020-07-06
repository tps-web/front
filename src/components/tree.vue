<template>
  <div>
     <vo-basic :data="chartData" :pan="true" :zoom="true" :export-button="true" export-button-name="导出"
            :draggable="true" :toggle-siblings-resp="true" parent-node-symbol="fa-users"  @click="selectNode(nodeData)"></vo-basic>

  </div>
</template>

<script>
import { VoBasic } from 'vue-orgchart'
export default {
  components: { VoBasic },
  created () {
    this.chartData = {
      name: 'JavaScript',
        children: [
          { name: 'Angular' },
          {
            name: 'React',
            children: [{ name: 'Preact' }]
          },
          {
            name: 'Vue',
            children: [{ name: 'Moon' }]
          }
        ]
    }
    },
     watch:{
    chartData(newVal){
    console.log(newVal)
    },
    methods:{
    selectNode(val){
      console.log(val)
    }
    }
}
}
</script>