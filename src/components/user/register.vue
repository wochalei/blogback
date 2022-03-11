<template>
    <div class="register">
         <div class="box">
         <div class="login">
             <div class="from">
                <label for="name" >账号:</label>
                <input type="text"  id="name" v-model="name">
                <label for="password" >密码:</label>
                <input type="password"  id="password" v-model="password">
                <!-- <div class="user_img" >头像: <img src=""></div>
                <label for="img" class="submit">上传头像</label>
                <input type="file"  id="img" -->
                <button class="submit" @click="add">注册</button>
             </div>          
         </div>
     </div>
    </div>
</template>
<script>
import {addUser} from '../../http/user'
export default {
    name:'register',
    data() {
        return {
            name:'',
            password:''
        }
    },
    methods: {
      add(){
          let data={name:this.name,password:this.password};
          addUser(data)
          .then(res=>{
            if(res.data.error!=1){
              alert(res.data.message);
              this.$router.push({path:'/login'});     
            }
             else alert(res.data.message);
          })
          .catch(err=>{console.log(err);})
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
    border-radius: 4px;
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