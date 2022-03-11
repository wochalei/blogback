<template>
    <div class="left_function">
     <ul>
      
        <item>
         <template v-slot:title>
            <span>博客管理</span><i class="iconfont icon-icon-- "></i>
         </template> 
          <template v-slot:item>
            <router-link to='/end/add'><li><i class="iconfont icon-yongyan"></i><span>写文章</span></li></router-link>
               <router-link to='/end/blog' ><li><i class="iconfont  icon-wenzhang2"></i><span>文章管理</span></li></router-link>
               <router-link to='/end/type' ><li><i class="iconfont icon-dengpao"></i><span>分类管理</span></li></router-link>
               <router-link to='/end/comment'><li><i class="iconfont icon-pinglun"></i><span>评论管理</span></li></router-link>
         </template> 
         
       </item>
       <item>
         <template v-slot:title>
            <span>友链管理</span><i class="iconfont icon-icon-- "></i>
         </template> 
          <template v-slot:item>
            <router-link to='/end/friend/add'><li><i class="iconfont icon-yongyan"></i><span>添加友链</span></li></router-link>
            <router-link to='/end/friend/change' ><li><i class="iconfont  icon-wenzhang2"></i><span>删除友链</span></li></router-link>
         </template> 
       </item>
       <item>
         <template v-slot:title>
            <span>个人管理</span><i class="iconfont icon-icon-- "></i>
         </template> 
          <template v-slot:item>
            <router-link to='/end/user'><li><i class="iconfont icon-yongyan"></i><span>个人信息</span></li></router-link>
           <router-link to='/end/introduce'><li><i class="iconfont icon-yongyan"></i><span>个人页面</span></li></router-link>
         </template> 
         
       </item>
       <item>
         <template v-slot:title>
            <span>系统管理</span><i class="iconfont icon-icon-- "></i>
         </template> 
          <template v-slot:item>
            <router-link to='/end/system'><li><i class="iconfont icon-yongyan"></i><span>基本设置</span></li></router-link>
         </template> 
       </item>
     </ul>
    </div>
</template>
<script>
import item from './item.vue';
export default {
   components:{
       item
   }
}
</script>
<style lang="scss">
  .left_function{
     a{
       color: #666 ;
     }
     
  }
   
</style>