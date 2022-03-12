<template>
  <div class="blog_add">
    <div class="divide">
      <div class="item">
        <p>文章标题</p>
        <input type="text" v-model="title" />
      </div>
      <div class="item">
        <p>文章首图URL</p>
        <input type="text" v-model="coverImg" />
      </div>
    </div>
    <div class="brief">
      <p>文章描述</p>
      <v-md-editor 
      v-model="summary" height="300px"
      :include-level="[3, 4]"
      >

      </v-md-editor>
    </div>
    <div class="content">
      <p>文章内容</p>
      <v-md-editor
        v-model="content"
        height="300px"
        :disabled-menus="[]"
        @upload-image="handleUploadImage"
        :include-level="[3, 4]"
      ></v-md-editor>
    </div>
    <div class="divide">
      <div class="item">
        <p>选择分类</p>
        <select v-model="type">
          <option :value="item.type" 
          v-for="(item, index) in typeList" 
          :key="index"  
          
          >{{item.type}}</option>
        </select>
      </div>
    </div>

    <button class="save" @click="save" >{{btn_text}}</button>
  </div>
</template>

<script>
import {blog,type,img} from '../../../../http/api'
import { matchImg } from "../../../../utils.js/tools";

export default {
  data() {
    return {
      title: "",
      summary: "",
      content: "",
      type: "",
      coverImg: "",
      img: [],
      flag:true,
      blog_id:0,
      typeList:[]
    };
  },
  methods: {
    save() {
      let data = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        type: this.type,
        coverImg: this.coverImg,
        img: this.img,
        blog_id:this.blog_id
      };
      let tmp = matchImg(data.content, data.img);
      data.img = tmp;
      if(!this.flag){
         blog.updateBlog(data)
          .then((res) => {
          if(res.data.error===1)  alert("无权限");
          else alert("成功"); 
          this.$router.push({path:'/end/blog'});
        })
        .catch((er) => {
          alert("修改失败");
        });
      }else{
       blog.addBlog(data)
        .then((res) => {
          if(res.data.error===1)  alert("无权限");
          else alert("成功");   
        })
        .catch((er) => {
          alert("失败");
        });
      }
     
      this.clear();
    },

    handleUploadImage(event, insertImage, files) {
      let form = new FormData();
      form.append("img", files[0]);
      img.addImg(form).then((res) => {
        this.img.push(res.data.url);

        insertImage({
          url: res.data.url,
          desc: files[0].name,

          // width: 'auto',
          // height: 'auto',
        });
      });
    },
    clear() {
      this.title = "";
      this.summary = "";
      this.content = "";
      this.type = "";
      this.coverImg = "";
      this.img = [];
    },
    copy(obj) {
      this.blog_id = obj.blog_id;
      this.content = obj.content;
      this.coverImg = obj.coverImg;
      this.summary = obj.summary;
      this.type = obj.type;
      this.title = obj.title;
    },
    getTypeList(){
      type.getType()
      .then(res=>{
        this.typeList=res.data.data;
        this.type=this.typeList[0].type;
      })
    }
  },
  mounted() {
    if (this.$route.query.blog_id) {
      this.blog_id=this.$route.query.blog_id;
      blog.searchAll({ blog_id: this.blog_id })
      .then((res) => {
        this.copy(res.data.data[0]);
        this.flag=false;
      });
    }
     this.getTypeList();
  },
  computed:{
    btn_text(){
      if(this.flag){
        return "立即发布";
      }
      return "保存修改";
    },
    
  }
};
</script>
<style lang="scss">
.blog_add {
  margin: 20px 20px;
  .divide {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .item {
      width: 49%;
    }
  }
  p {
    padding: 20px 0;
    color: #000;
  }
}
.item {

  input,
  select {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-indent: 10px;
  }
}
.save {
  display: block;
  margin: 50px auto;
  padding: 12px 24px;
  background-color: rgb(43, 186, 243);
  cursor: pointer;
  color: white;
  transition: color 0.7s;
}
.save:hover {
  background-color: rgb(43, 186, 243);

  color: #000;
}
</style>