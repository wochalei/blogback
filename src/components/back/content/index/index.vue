<template>
  <div class="index">
    <tip :say='say'/>
    <card :list="data" v-if="load" />
    <div class="loadwrap" v-else><loade/></div>
    <page v-if="totalPage" 
    @getPage='getPage' 
    :pageSize='pageSize'
    :pageCount='pageCount'
    :totalPage="totalPage" />
  </div>
</template>
<script>
import loade from '../../../common/loading/loaddata/index.vue'
import tip from "../../indextip";
import card from "../card/index.vue";
import page from "../../../common/page";
import {blog} from '../../../../http/api'
import {eventBus} from '../../../../utils.js/bus'
import {timestampToTime} from '../../../../utils.js/tools'

export default {
  data() {
    return {
      data: [],
      pageSize: 6,
      pageCount: 10,
      allCount: 0,
      say:'',
      text:'',
      load:false
    };
  },
  components: {
    tip,
    card,
    page,
    loade
    
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
    getPage(obj) {
      if(!obj.page) this.page=1;
      else this.page = obj.page;
      this.load=false;
      blog.searchAll({ title: this.text, page: obj.page, pageSize: obj.pageSize })
        .then((res) => {
          this.load=true;
          this.data = this.formateTime(res.data.data);
          this.allCount = res.data.allCount; 
        })

    },
  },
  mounted() {
    this.getPage({ page: 1, pageSize: this.pageSize }, "");
    eventBus.$on('title',(value)=>{
      this.text=value;
      this.getPage({page: 1, pageSize: this.pageSize});
      
    })
    eventBus.$on('renew',()=>{
      this.text='';
      this.getPage({ page: 1, pageSize: this.pageSize });
      
    })
     
    this.say=localStorage.getItem('say');
     
  },
};
</script>
<style lang="scss">
.loadwrap{
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(211, 211, 211,0.5);
  
}
</style>