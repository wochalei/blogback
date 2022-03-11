<template>  
    <div class="box">
         <div class="login">
             <div class="from">
                <label for="name">账号:</label>
                <input type="text"  id="name" v-model="name">
                <label for="password">密码:</label>
                
                <input type="password" id="password" v-model="password">
                <div class="user">
                    <span @click="register">立即注册</span>
                    <span>找回密码</span>
                </div>   
                <button class="submit" @click="login">登录</button>
             </div>
            
         </div>
     </div>
    
</template>
<script>
import {loginUser} from '../../http/user'
export default {
    name:'login',
    data() {
        return {
            name:'',
            password:''
        }
    },
    methods: {
        login(){
            let data={name:this.name,password:this.password};
            loginUser(data)
            .then(res=>{
                if(res.data.error!=1){
                   
                  localStorage.setItem('user_id',res.data.data[0].user_id);
                  localStorage.setItem('userName',res.data.data[0].name);
                  
                  alert('登录成功');
                  this.$router.push({path:'/'});
                }else{
                    alert('密码或账号错误');
                }
                
            })
            .catch(err=>{console.log(err);})
        },
        register(){
            
             this.$router.push({path:'/login/register'});
        }
    },
   
}
</script>
<style lang="scss">
.box{
    width: 100vw;
    height: 100vh;
    background-color: tan;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../../public/img/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
}
.login{
    width: 400px;
    background-color: rgba(255, 255, 255, .8);
    opacity:0.6 ;
    transition: all .7s;
}
.login:hover{
    opacity: 0.8;
}
.from{
    width: 320px;
    height: 340px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
    padding: 50px 0;
    
}
.from input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: transparent solid 1px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: .106667rem;
    color: #666;
    text-indent: .5em;
}
.from input:hover{
    border: rgb(97, 202, 184) solid 1px;
}

.from .user{
    align-self:flex-end;
    cursor: pointer;
}
.submit{
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(26,198,255, 0.6);
  color: #fff;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
}
.submit:hover{
    background-color: rgba(26,198,255,0.8);
}
#img{
    display: none;
}
.user_img{
    display:inline-block ;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.user_img img{
    width: 40px;
    height: 40px;
}
/* 属性src为空时生效 */
img[src=""]{
    opacity: 0;
}
.user span{
    margin-right:10px ;
}
</style>