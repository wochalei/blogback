<template>
  <div ref="chart" :style="{ width: width, height: height }" ></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
       id: Date.now()
    }
  },
  props: {
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "200px",
    },
    option: {
      type: Object,
      default: null,
    },
  },
  watch:{
    option:{
      handler(current,pre){
        this.myChart.setOption(this.option);
      },
      deep:true
    }
  },
  mounted() {
    
    this.myChart = echarts.init(this.$refs.chart);
    
    this.myChart.setOption(this.option);
    window.addEventListener('resize',()=>{
       this.myChart.resize();
       console.log(this.$refs.chart); 
    })
   
  },
};
</script>

<style lang="scss">
</style>