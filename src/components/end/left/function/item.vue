<template>
  <li :class="{ item: true, active: flag }">
    <div class="item_title" @click="showList"><slot name="title"></slot></div>
    <ul class="item_list" ref="a" >
      <slot name="item"></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: "left_function",
  data() {
    return {
      flag: false,
      height:''
    };
  },
  methods: {
    showList() {
      this.flag = !this.flag;
     
      if(this.flag) this.$refs.a.style.height=this.height;
      else this.$refs.a.style.height='0px';
      
    },
  },
  mounted() {
    
    this.height=this.$refs.a.clientHeight+"px";
    
    this.$refs.a.style.height='0px';
  },
};
</script>
<style lang="scss">
.left_function {
  width: 100%;
  .item_list li,
  .item_title {
    width: 100%;
    height: 50px;
    text-align: center;

    line-height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  }
  .item_title {
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: all 0.7s;
    .iconfont {
      font-size: 20px !important;
      color: black;
    }
  }
  .item_list {
   
    overflow: hidden;
    transition: all 0.7s;
  }
}
.active {
  .iconfont {
    transform: rotate(180deg);
  }
 
}
.item_list {
  li:hover {
    background-color: white;
  }
}
</style>