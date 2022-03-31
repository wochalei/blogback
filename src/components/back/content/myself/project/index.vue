<template>
    <div class="project">
        <a class="project-item" href="https://github.com/wochalei/blogback" target="blank">
             <div class="project-icon">
             <i class="iconfont icon-wenzhang2"></i>
             </div>
             <p class="project-title">myBlog</p>
             <p class="project-brief">本系统博客前端源码</p>
        </a>
        <a class="project-item" href="https://github.com/wochalei/blogend" target="blank">
             <div class="project-icon">
             <i class="iconfont icon-wenzhang2"></i>
             </div>
             <p class="project-title">myBlog</p>
             <p class="project-brief">本系统博客后端源码</p>
        </a>
        <a class="project-item" href="https://github.com/wochalei/xiaomi" target="blank">
             <div class="project-icon">
             <i class="iconfont icon-wenzhang2"></i>
             </div>
             <p class="project-title">小米商城</p>
             <p class="project-brief">原生js项目版</p>
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .project{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        .project-item{
            display: block;
            padding: 30px 0;
            transition: all 0.7s;
          .project-icon{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background-color: #55efc4;
              margin: 0 auto 30px auto;
              i{
                  font-size: 30px;
                  color: honeydew;
              }
          }
           .project-title{
               color: #34495e;
               font-size: 18.75px;
               text-align: center;
               margin-bottom: 15px;
           }
           .project-brief{
               color:#999999;
               font-size: 13.5px;
               line-height: 20px;
               text-align: center;
           }
           &:hover{
               
               background-color:rgba($color: #000000, $alpha: 0.1);
           }
        }
    }

</style>