<template>
  <div class="page">
    <ul>
      <button @click="pre" :disabled="currentPage===1">上一页</button>
      <li
        :class="{ active: currentPage == item + 1 }"
        v-for="(item, index) in pageList"
        :key="index"
        @click="click"
      >
        {{ item + 1 }}
      </li>

      <button @click="next" :disabled="currentPage===pageList.length">下一页</button>
      <div class="skip">
        <span>前往</span>
        <input type="text" v-model="skipPage" />
        <span>页</span>
        <button @click="skip" >跳转</button>
      </div>
      <span>共{{totalPage}}页</span>
    </ul>
  </div>
</template>
<script>
import {debounce} from '../../../utils.js/tools'
export default {
  data() {
    return {
      //totalCount: 0,
      currentPage: 1,
      //pageSize: 10,  //页大小
      pageList: [], //页数组
      //pageCount: 10, //显示多少页
      //totalPage: 50, //页总数
      skipPage:"",
    };
  },
  methods: {
    getList() {
      let tmp = [];
      if (this.totalPage >= 10) {
        for (let i = 0; i < 10; i++) {
          tmp.push(i);
        }
      } else {
        for (let i = 0; i < this.totalPage; i++) {
          tmp.push(i);
        }
      }

      this.pageList = tmp;
     
    },
    pre:debounce(function(){
      if (this.currentPage <= 1) this.currentPage = 1;
      else this.currentPage--;

      this.updatedList(this.currentPage);
      this.$emit("getPage", {
        page: this.currentPage,
        pageSize: this.pageSize,
      });
    },300),
    next:debounce(function() {
      if (this.currentPage >= this.totalPage) this.currentPage = this.totalPage;
      else this.currentPage++;

      this.updatedList(this.currentPage);
      this.$emit("getPage", {
        page: this.currentPage,
        pageSize: this.pageSize,
      });
    },300),
    updatedList(index) {
      let begin = index - 5,
        end = index + 5 < this.totalPage ? index + 5 : this.totalPage;
      if (end <= this.pageCount && this.totalPage <= this.pageCount) {
        begin = 0;
        end = this.totalPage;
      }
      if (this.currentPage + 5 >= this.totalPage) begin = this.totalPage - 10;
      if (begin < 0) {
        begin = 0;
        end = this.pageCount < this.totalPage ? this.pageCount : this.totalPage;
      }
      const tmp = [];
      for (let i = begin; i < end; i++) {
        tmp.push(i);
      }
      this.pageList = tmp;
    },
    click:debounce(function(e) {
      const currentPage = Number(e.target.textContent);

      this.currentPage = currentPage;

      this.updatedList(this.currentPage);
      this.$emit("getPage", {
        page: this.currentPage,
        pageSize: this.pageSize,
        
      });
    },300),
    skip(){
      //变数字类型
      this.skipPage=+this.skipPage;
      if(isNaN(this.skipPage))return alert("无此页");
      if(this.skipPage>this.totalPage){
        alert("无此页");
        return;
      }
      this.currentPage = this.skipPage;
      this.updatedList(this.currentPage);
      this.$emit("getPage", {
        page: this.currentPage,
        pageSize: this.pageSize,
        
      });
    }
  },
  props: {
    //totalCount:Number,
    pageSize: Number,
    pageCount: Number,
    totalPage: Number,
  },
  watch:{
     totalPage(){
       this.getList();
     }
  },
  mounted() {
    this.getList();
  },
};
</script>
<style lang="scss">
.page {
  ul {
    display: flex;
    align-items: center;

    li {
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      background-color: #f4f4f5;
      color: #606266;
      cursor: pointer;
      margin: 10px 10px;
      border-radius: 4px;
      flex-shrink: 0;
    }
    .active {
      color: white;
      background-color: #409eff;
    }
    button {
      height: 30px;
      padding: 0 10px;
      cursor: pointer;
      border-radius: 4px;
      flex-shrink: 0;
    }
  }
  .skip {
    height: 30px;
    margin: 0 10px;
    input {
      width: 46px;
      height: 100%;
      border: 1px solid #7777;
      text-align: center;
      border-radius: 10px;
    }
    flex-shrink: 0;
  }
}
@media screen and(max-width:1222px) {
  .page{
    ul{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 44px;
      button{
        transition: all 0.4s;
      }
      button:hover{
       background-color: skyblue;
       color: white;
      }
    }
    li,.skip,span{
      display: none;
    }
    
  }
}
</style>