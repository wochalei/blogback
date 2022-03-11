<template>
  <div class="card_item"  @click="change">
    
    <div class="card_content">
      <div class="card_img">
        <img :src="item.coverImg" />
        <h2 class="card_tittle">{{item.title}}</h2>
      </div>
      <div class="card_brief">
       {{item.summary}}
      </div>
      <div class="card_box">
        <div class="card_time">
          <i class="iconfont icon-shijian"></i>
          <span>{{item.created}}</span>
        </div>
        <div class="card_type">
            <i class="iconfont icon-24gl-tags3"></i>
            <span>{{item.type}}</span>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  name: "card_item",
  data() {
    return {
      
    }
  },
  methods: {
    change(){
     this.$router.push({name:'show', query: { blog_id:this.item.blog_id}})
    }
  },
  props:{
    item:Object
  }
};
</script>
<style lang="scss">

.card_item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  color: #34495e;
}
.card_content {
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 5px #888888;
  transition: all 0.7s;
  .card_brief{
        position: relative;
        line-height: 20px;
        height: 40px;
        overflow: hidden;
        margin-top: 20px;
        text-align:justify;
        padding-left:20px;
  }
  .card_tittle{
    font-size: 20px;
  }
  .card_brief::before{
     position: absolute;
     width: 20px;
     height: 20px;
     content: "...";
     right: 0;
     bottom: 0;
     background-color: #fff;
  }
  .card_brief::after{
      display: inline;
      position: absolute;
      content: "";
      width: 20px;
      height: 20px;

      right: 0;
      background-color: #fff;
  }
}
.card_content:hover{
  transform: translateY(-10px);
  box-shadow: 0px 0px 15px #888888;
}
.card_img {
  position: relative;
  width: 100%;
  height: 220px;
  .card_tittle {
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: #2c3e50;
  }
}
.card_box{
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    i{
        font-size: inherit;
    }
}
</style>