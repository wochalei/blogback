<template>
  <div class="blog">
    <search :tip="tip" @value="search"></search>
    <list :title="title">
      <template v-slot:body>
        <tr v-for="(item, index) in datalist" :key="index" :data-blog_id='item.blog_id'>
          <td>{{  (index+1)+pageSize*(page-1) }}</td>
          <!-- (+index+1)+pageSize*(+page-1) -->
          <td>{{ item.title }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.created }}</td>
          <td>{{ item.updated }}</td>
          <td>{{ item.blog_id }}</td>
          <td>
            <button @click="change">编辑</button>
            <button @click="deleted">删除</button>
          </td>
        </tr>
      </template>
    </list>
    <page v-if="totalPage" 
    @getPage='getPage' 
    :pageSize='pageSize'
    :pageCount='pageCount'
    :totalPage="totalPage" />
   
  </div>
</template>
<script>
import page from "../../../common/page";
import list from "../../../common/form";
import search from "../../../common/search";
import {blog} from '../../../../http/api'
import{timestampToTime} from '../../../../utils.js/tools'
export default {
  data() {
    return {
      title: ["序号", "标题", "分类", "创建时间", "最近更新", "博客id", "操作"],
      data: [],
      tip: "输入文章标题",
      pageSize:10,
      pageCount:10,
      allCount:0,
      page:1,
    };
  },

  components: {
    page,
    list,
    search,
  },
  computed: {
    datalist() {
      return this.data;
    },
    totalPage(){
        return Math.ceil(this.allCount/this.pageSize); 
    }
  },
  methods: {
    change(e) {
      const blog_id =e.target.parentElement.parentElement.dataset.blog_id;
      
      this.$router.push({ path: "/end/blog/change", query: { blog_id } });
    },

    deleted(e){
       const blog_id =e.target.parentElement.parentElement.dataset.blog_id;
       
       blog.deletedBlog(blog_id)
       .then(res=>{
         
          this.getPage({page:1,pageSize:this.pageSize},"");
       })
       .catch(err=>{
         console.log(err);
       })
    },
    formateTime(data){
     
      return data.map(item=>{
        
        item.created=timestampToTime(item.created);
        if(item.updated)
        item.updated=timestampToTime(item.updated);
        return item;
      })
    },
    search(text){
      this.text =text;
      this.getPage({ title: this.text, page: 1, pageSize: this.pageSize })
    },
    //服务器分别请求分页
    getPage(obj){
      if(!obj.page) this.page=1;
      else this.page=obj.page;
       blog.searchAll({title:this.text,page:obj.page,pageSize:obj.pageSize})
        .then((res) => {
          
          this.data=res.data.data;
          this.data =this.formateTime(this.data);
          this.allCount=res.data.allCount;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getPage({page:1,pageSize:this.pageSize});
  },
};
</script>
<style lang="scss">
.blog {
  margin: 0 20px;
}
</style>