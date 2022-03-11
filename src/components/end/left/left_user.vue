<template>
    <div class="left_user">
        <div class="left_img" @click="goHome"><img :src="information.img"></div>
        <div class="left_information">
            <span class="left_name">{{information.name}}</span>
           <!--  <span class="left_identity">{{information.user_type ? "用户":"管理员"}}</span> -->
        </div>
    </div>
</template>
<script>
import {getUser} from '../../../http/user'
export default {
    name:"left_user",
    data() {
        return {
            information:{}
        }
    },
    mounted() {
        getUser()
        .then(res=>{this.information=res.data[0];
         
        })
    },
    methods: {
        goHome(){
            this.$router.push({path:'/'});
        }
    },
}
</script>
<style lang="scss">
    .left_user{
        width: 100%;
        padding: 20px 0 5px 0;
        border-bottom: 1px solid rgba(255, 255, 255,0.6);
        .left_img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto;
            overflow: hidden;
            cursor: pointer;
        }
        .left_information{
           display: flex;
           justify-content: center;
           align-items: center;
           flex-direction: column;
           .left_name{
               margin: 10px 0 ;
               color: white;
               font-weight: 600;
               font-size: 18px;
           }
        }
    }
</style>