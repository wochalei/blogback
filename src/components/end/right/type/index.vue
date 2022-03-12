<template>
  <div class="type">
    <button class="type_add" @click="begin">添加分类</button>
    <list :title="title">
      <template v-slot:body>
        <tr v-for="(item, index) in listData" :key="index" :data-type='item.type'>
          <td>{{ (index + 1)+pageSize*(page-1) }}</td>
          <td>{{ item.type }}</td>

          <td>
            <button  @click="change">编辑</button>
            <button @click="deleted">删除</button>
          </td>
        </tr>
      </template>
    </list>
    <page v-if="totalPage" 
    @getPage='getPage' 
    :pageSize='pageSize'
    :pageCount='pageCount'
    :totalPage="totalPage"/>
    <transition>
      <typeadd v-if="flag" @close="close" @add="add" :btn_text="'添加'"/>
    </transition>
     <transition>
      <typeadd v-if="isChange" @close="close" @add="save" :btn_text="'保存'"/>
    </transition>
  </div>
</template>
<script>
import page from "../../../common/page";
import list from "../../../common/form";
import typeadd from "../../../common/typeadd";
import{type} from '../../../../http/api'
export default {
  data() {
    return {
      tip: "输入博客标题",
      title: ["序号", "分类名称", "操作"],
      data:[],
      flag: false,
      isChange:false,
      allCount:0,
      pageSize:10,
      pageCount:10,
      page:1
    };
  },
  computed:{
    totalPage(){
        return Math.ceil(this.allCount/this.pageSize); 
    },
    /* 本地存储分页 */
    listData(){
      let end = this.page*this.pageSize>this.allCount ? this.allCount:this.page*this.pageSize;
      let start=(this.page-1)*this.pageSize;
      
      return this.data.slice(start,end);
    }
  },
  components: {
    page,
    list,
    typeadd,
  },
  methods: {
    begin() {
      this.flag = true;
    },
    close(value) {
      this.flag = value;
      this.isChange=value;
    },
    save(value){
    
       type.changeType(this.type,value)
       .then(res=>{
         
         this.close();
         this.httpType();
       })
       .catch(err=>{
         console.log(err);
       })
    },
    add(value) {
      type.addType(value)
        .then((res) => {
          if (res.data.error != 1) alert("成功添加");
          else alert("已有该类型");
          this.flag = false;

          //这里id到时候要改
          this.httpType();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    httpType() {
      type.getType().then((res) => {
        this.data = res.data.data;
        this.allCount=res.data.data.length;
      });
    },
    deleted(e){
      const type =e.target.parentElement.parentElement.dataset.type;
      type.deletedType(type)
      .then(res=>{
         
         this.httpType();
      })
      .catch(err=>{
        console.log(err);
      })
    },
    change(e){
       const type =e.target.parentElement.parentElement.dataset.type;
      this.isChange=true;
      this.type=type;
    },
    getPage(obj){
      this.page=obj.page;
    }
    
  },
  mounted() {
    this.httpType();
  },
};
</script>
<style lang="scss">
.type {
    position: relative;
  margin: 10px 20px;
}
</style>