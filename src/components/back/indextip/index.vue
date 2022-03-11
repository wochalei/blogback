<template>
  <div class="tip">
    <div class="tip_tittle">
      <i class="iconfont icon-24gl-tags3"></i>
      <span> 对自己说的话</span> 
    </div>
    <div class="tip_text">{{say?say:base}}</div>
  </div>
</template>
<script>
export default {
  name: "tip",
  data() {
    return {
       base:'生活是一面镜子。你对它笑,它就对你笑;你对它哭,它也对你哭。' 
    }
  },
  props:['say']
};
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
</style>