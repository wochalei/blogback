<template>
    <div class="link">
        <h2><i class="iconfont icon-lianjie"></i> 友情链接</h2>
        <friend :data='data'/>
    </div>
</template>
<script>
import friend from './friend'
import {getLink}from '../../../../http/link'
export default {
    data() {
        return {
            data:''
        }
    },
     mounted() {
        window.scrollTo(0,window.innerHeight);
        getLink().then(res=>{this.data=res.data.data})
    },
    components:{
        friend
    },

}
</script>
<style lang="scss">
    .link{
        width: 100%;
        min-height: 100vh;
        background-color: #fff;
        border-radius: 10px;
        h2{
            text-align: center;
            color: #34495e;
            padding-top:40px ;
        }
        i{
            font-size: 25px;
        }
    }
</style>