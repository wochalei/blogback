<template>
  <div class="index">
    <tip :say='say'/>
    <card :list="data" />
    <page v-if="totalPage" 
    @getPage='getPage' 
    :pageSize='pageSize'
    :pageCount='pageCount'
    :totalPage="totalPage" />
   
  </div>
</template>
<script>
import tip from "../../indextip";
import card from "../card/index.vue";
import page from "../../../common/page";
import { searchAll,searchPublic } from "../../../../http/blog";
import {eventBus} from '../../../../utils.js/bus'
import {timestampToTime} from '../../../../utils.js/tools'

export default {
  data() {
    return {
      data: [],
      pageSize: 6,
      pageCount: 10,
      allCount: 0,
      say:''
    };
  },
  components: {
    tip,
    card,
    page,
    
  },
  computed: {
    totalPage() {
      return Math.ceil(this.allCount / this.pageSize);
    },
  },
  methods: {
    formateTime(tmp){
       return tmp.map((item)=>{
         item.created=timestampToTime(+item.created);
           
      
       return item;
       })
    }
    ,
    getPage(obj, text) {
      if(!obj.page) this.page=1;
      else this.page = obj.page;
      searchAll({ title: text, page: obj.page, pageSize: obj.pageSize })
        .then((res) => {
          
          this.data = this.formateTime(res.data.data);
          this.allCount = res.data.allCount;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getPage({ page: 1, pageSize: this.pageSize }, "");
    eventBus.$on('title',(value)=>{
      
      this.getPage({},value);
      
    })
    eventBus.$on('renew',()=>{
      
      this.getPage({ page: 1, pageSize: this.pageSize }, "");
      
    })
     
    this.say=localStorage.getItem('say');
     
  },
};
</script>
<style lang="scss">
</style>