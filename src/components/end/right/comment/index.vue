<template>
  <div class="comment">
    <search :tip="tip" @value='search'></search>
    <list :title="title">
      <template v-slot:body>
        <tr v-for="(item, index) in listData" :key="index">
          <td>{{ index + 1 + pageSize * (page - 1) }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.target }}</td>
          <td>{{ item.blog_id }}</td>
          <td>{{ item.time}}</td>
          <td>{{ item.email}}</td>
          <td>
            <button v-if="item.flag==='false'"
              @click="addComment"
              :data-blog_id="item.blog_id"
              :data-id="item.id"
              :data-email="item.email"
              :data-name="item.userName"
            >
              回复
            </button>
            <button v-else disabled>
               回复
            </button>

            <button @click="deletedComment" :data-id="item.id">删除</button>
          </td>
        </tr>
      </template>
    </list>
    <page
      v-if="totalPage"
      @getPage="getPage"
      :pageSize="pageSize"
      :pageCount="pageCount"
      :totalPage="totalPage"
    />
    <tmp v-if="flag" @close="close" @getContent="getContent" />
  </div>
</template>
<script>
import page from "../../../common/page";
import list from "../../../common/form";
import search from "../../../common/search";
import tmp from "../../../../components/common/tmp";
import {comment} from '../../../../http/api'
import{timestampToTime} from '../../../../utils.js/tools'
export default {
  data() {
    return {
      tip: "输入博客id",
      title: ["序号", "评论内容", "账号名","回复对象", "博客id", "发表时间", "邮箱","操作"],
      data: [],
      allCount: 0,
      pageSize: 10,
      pageCount: 10,
      page: 1,
      flag: false,
      comment: {},
    };
  },
  components: {
    page,
    list,
    search,
    tmp,
  },
  methods: {
    getList(id=undefined) {
      comment.get({blog_id:id}).then((res) => {
        let data =this.sort(res.data.data);
        this.data =this.formateTime(data);
        this.allCount = data.length;
        
      });
    },
    sort(data){
     const a=[],b=[];
      data.forEach((item)=>{
         if(item.flag!=='true') a.push(item);
         else b.push(item);
      })
      return  a.concat(b);
    },
    formateTime(data){
      
      return data.map(item=>{
        item.time=timestampToTime(item.time);
        return item;
      })
    },
    getPage(obj) {
      this.page = obj.page;
    },
    deletedComment(e) {
      let id = e.target.dataset.id;
      comment.deleted(id)
        .then((res) => {
          if (res.data.error != 1) {
            alert("删除成功");
            this.getList();
          } else {
            alert("删除失败");
          }
        })
        .catch((er) => {
          console.log(er);
        });
    },
    //这个写的不好,因为组件没抽离开获取值麻烦问题，但之前这样写了，重新改比较麻烦 就先不改了就这样
    addComment(e) {
      this.flag = true;
      let data = e.target.dataset;
      let userName = localStorage.getItem("userName"),
          time = Date.now();
      let comment = {
        blog_id: +data.blog_id,
        pid: +data.id,
        userName,
        time,
        email:data.email,
        target:data.name
      };
      this.comment = comment;
    },
    close() {
      this.flag = false;
     
    },
    getContent(content) {
     
      this.comment.title = content.title;
      this.comment.content = content.html;
      this.comment.flag ='true'
     
      comment.reply(this.comment).then((res) => {
       if(res.data.error===1) alert('回复失败');
       else{
         alert('回复成功'); this.close();
       }  
      }).catch(e=>{
       
        alert('回复失败');
      });
    },
    search(value){
       console.log(value);
      this.getList(value);
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.allCount / this.pageSize);
    },
    /* 本地存储分页 */
    listData() {
      let end =
        this.page * this.pageSize > this.allCount
          ? this.allCount
          : this.page * this.pageSize;
      let start = (this.page - 1) * this.pageSize;

      return this.data.slice(start, end);
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
<style lang="scss">
.comment {
  margin: 20px 20px;
}
</style>