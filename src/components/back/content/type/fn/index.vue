<template>
    <div class="tip">
    <div class="tip_tittle">
      <i class="iconfont icon-fenlei"></i>
      <span> 文章分类</span> 
    </div>
    <div class="tip_fn">
        <div v-for="(item, index) in typeList" :key="index" :data-value='item.type'
        @click="search"
        >{{item.type}}</div>

    </div>
  </div>

</template>
<script>
export default {
  methods: {
    search(e){
      let value = e.target.dataset.value;
      this.$emit("getOne",value);
    }
  },
    mounted() {
        window.scrollTo(0,window.innerHeight);
    },
    props:["typeList"]
}
</script>
<style lang="scss">
 .tip {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  color: #7f8c8d;
  box-shadow: 5px 5px 5px #888888;
  .tip_tittle{
      font-size: 30px ;
      font-weight: 700;
      color: #34495e;
      margin-bottom: 20px;
      i{
          font-size: 30px ;
      }
  }
}
.tip_fn{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  div{
    padding: 12px 24px;
    color: #95a5a6;
    margin: 10px 10px;
    border-radius: 10px;
    background-color: #ecf0f1;
    cursor: pointer;
    transition: all .7s;
  }
  div:hover{
    background-color: #3498db;
    color: #ecf0f1;
  }
}
</style>