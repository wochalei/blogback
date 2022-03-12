<template>
  <div class="show">
    <div class="show_tittle">{{ data.title }}</div>
    <div class="show_informat">
      <div class="show_type">
        <div class="show_flag">{{ data.type }}</div>
        <div>
          <i class="iconfont icon-24gl-tags3"></i><span>{{ data.type }}</span>
        </div>
      </div>
      <div class="show_tip">
        <div>
          <i class="iconfont icon-riqi"></i><span>发布日期:</span
          ><span>{{ data.created }}</span>
        </div>
        <div>
          <i class="iconfont icon-jianchagengxin"></i><span>更新日期:</span
          ><span>{{ data.updated ? data.updated : "未更改" }}</span>
        </div>
<!--         <div>
          <i class="iconfont icon-yanjing"></i><span>阅读时长:</span
          ><span>1分</span>
        </div> -->
      </div>
    </div>
   <!--  <div class="show_content">
      <v-md-preview :text="data.content"></v-md-preview>
    </div> -->
     <blogshow  v-if="data.content" :text="data.content" />
    <user-comment @getContent="getContent" />
    <div class="show_item">
      
      <template v-if="commentList">
       <commentitem v-for="(item, index) in commentList" :key="index" :item='item' @refesh="refesh"/>
      </template>

    </div>
    <go-top/>
  </div>
</template>
<script>
import {blog,comment} from '../../../../http/api'
import userComment from "../../../common/comment";
import commentitem from "../../../common/comment/item";
import {eventBus} from '../../../../utils.js/bus.js'
import{ timestampToTime} from '../../../../utils.js/tools'
import blogshow from './blogshow'
import goTop from '../../../common/goTop'
export default {
  data() {
    return {
      blog_id: 0,
      data: {},
      /* comment: {
        content: "",
        blog_id: 0,
        
        pid: 0,
        time: 0,
      }, */
  
      commentList:false,
    };
  },
  components: {
    userComment,
    commentitem,
    blogshow,
    goTop
  },
  methods: {
    init() {
      this.blog_id = this.$route.query.blog_id;
    },
    getContent(obj) { 
      obj.time = Date.now();
      obj.blog_id=this.blog_id;
      obj.pid = 0;
      comment.add(obj)
        .then((res) => {
          this.content = "";
          if (res.data.error != 1) {
            this.getList();
            alert("评论成功");
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getList() {
      comment.get({blog_id:this.blog_id}).then((res) => {
        this.commentList= this.treeFormat(res.data.data);
      })
      .catch(er=>{console.log(er);})
    },
    treeFormat(tmp){
      let _tmp=tmp.map((item)=>{
            item.time=timestampToTime(item.time);
            return item;
      });
      
     return _tmp.filter((item)=>{
         let arr=_tmp.filter((kid)=>item.id===kid.pid);
         
         item.kids = arr;
         if(item.pid===0)return item; 
         
       })
        
    },
    refesh(){
      this.getList();
    },
    formateTime(tmp){
      
      
            tmp.created=timestampToTime(+tmp.created);
           
            if(tmp.updated) tmp.updated=timestampToTime(+tmp.updated);
            
      
      return tmp;
    } 
  },
  mounted() {
    this.init();
    blog.searchPublic({ blog_id: this.blog_id }).then((res) => {
      this.data =this.formateTime(res.data.data[0]);
      
    });
    this.getList();
    window.scrollTo(0, window.innerHeight);
  },
  created() {
    eventBus.$on('refesh',()=>{this.getList();})
  },
};
</script>
<style lang="scss">
.show {
  color: #000;
  .show_item {
    width: 100%;
  }

  .show_tittle {
    width: 100%;
    background-color: #fff;
    font-weight: 900;
    font-size: 42px;
    text-align: center;
    padding: 20px 0;
    cursor: pointer;
    border-radius: 10px 10px 0 0;
    padding: 40px 20px;
  }

}
.show_informat {
  background-color: #fff;
  padding: 0 20px;
  .show_type {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 30px 0;
    .show_flag {
      background-image: linear-gradient(45deg, #3498db, #2980b9);
      padding: 10px 20px;
      border-radius: 10px;
      color: #fff;
    }
  }
  .show_tip {
    width: 100%;
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    div {
      margin-right: 10px;
    }
  }
}
</style>