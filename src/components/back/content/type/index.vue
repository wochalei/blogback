<template>
  <div class="typeA">
    <fn :typeList='typeList' @getOne='getOne'/>
    
    <datamessage v-if="!data.length&&flag"/>
    <card :list="data" v-else />
    <page
      v-if="totalPage"
      @getPage="getPage"
      :pageSize="pageSize"
      :pageCount="pageCount"
      :totalPage="totalPage"
    />
  </div>
</template>
<script>
import fn from "./fn";
import card from "../card/index.vue";
import page from "../../../common/page";
import datamessage from '../../../common/message/datamessage'
import {blog,type} from '../../../../http/api'
export default {
  data() {
    return {
      data: [],
      pageSize: 6,
      pageCount: 10,
      allCount: 0,
      typeList:[],
      flag:false
    };
  },
  components: {
    fn,
    card,
    page,
    datamessage
  },
   computed: {
    totalPage() {
      return Math.ceil(this.allCount / this.pageSize);
    },
  },
  methods: {
      getPage(obj, text) {
      this.page = obj.page;
      blog.searchType({ title: text, page: obj.page, pageSize: obj.pageSize ,type:obj.type})
        .then((res) => {
          
          this.data = res.data.data;
          this.allCount = res.data.allCount;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHtmlType(){
        type.getType()
        .then(res=>{
            
          this.typeList=res.data.data;
        })
    },
    getOne(value){
     this.flag=true;
     this.getPage({ page: 1, pageSize: this.pageSize ,type:value}, "");
      
    }
  },
  mounted() {
      
      this.getHtmlType();
      window.scrollTo(0, window.innerHeight);
     
  },
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
  .tip_tittle {
    font-size: 30px;
    font-weight: 700;
    color: #34495e;
    margin-bottom: 20px;
    i {
      font-size: 30px;
    }
  }
}
</style>