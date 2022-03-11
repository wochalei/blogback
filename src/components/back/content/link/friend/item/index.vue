<template>
  <div class="f_item">
    <div class="f_img">
      <img :src="item.img" alt="img" />
    </div>
    <div class="f_message">
      <h3>{{item.name}}</h3>
      <p>{{item.say}}</p>
    </div>
    <a target="blank" :href='changXss(item.url)'>前去学习</a>
  </div>
</template>
<script>
import {changXss} from '../../../../../../utils.js/defend'
export default {
   props:['item'],
   methods: {
     changXss
   },
};
</script>
<style lang="scss">
.f_item {
  display: flex;
  position: relative;
  align-items: center;

  margin-bottom:40px;
  background-color: tan;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 20px;
  .f_img {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-position: center center;
    overflow: hidden;
  }
  .f_message {
      flex: 1;
    h3 {
      border-bottom: 2px white solid;
      margin-bottom: 10px;
    }
    p{
        font-size: 14px;
    }
  }
  a {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,50%);
    padding: 12px 24px;
    background-color: #2bbaf3;
    cursor: pointer;
    color: white;
    transition: color 0.7s;
    font-size: 14px;
  }
}
</style>