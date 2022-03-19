<template>
    <div ref="chart" :style="{width:width,height:height}">
        
    </div>
</template>

<script>

import * as echarts from 'echarts';
export default {
   props:{
      width:{
          type:String,
          default:'200px'
      },
      height:{
          type:String,
          default:'200px'
      },
      option:{
          type:Object,
          default:null
      }
   } ,  
    mounted() {
        console.log(this.width,this.height);
       let myChart = echarts.init(this.$refs.chart);
       
         myChart.setOption(this.option);
    },
}
</script>

<style lang="scss">
    
</style>