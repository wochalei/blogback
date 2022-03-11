<template>
  <div class="commenta">
    <div class="comment_title">
      <i class="iconfont icon-pinglun"></i>
    </div>

    <div class="comment_content">
      <div class="comment_user">
         <div>
        <span>昵称:</span> <span class="t_ip">{{name_tip}}</span>
        <input type="text" name="comment_user_name" v-model="name" />
        
        </div> 
        <div>
        <span>邮箱:</span> <span class="t_ip">{{email_tip}}</span>
        <input type="email" name="comment_user_email" v-model="email" />

        </div>
      </div>
      <textarea name="" cols="30" rows="10" v-model="value"></textarea>
      <div class="comment_btn"><button @click="emit">提交</button></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "commenta",
  data() {
    return {
        name_tip:'',
        email_tip:'',
        name:'',
        email:'',
        value:''
    };
  },
  methods: {
    init(){
       this.name='',this.name_tip='',this.email_tip='',this.email='',
       this.value='';
    },
    emit() {
      
     let flag= this.checkData(this.name,this.email);
      if(flag){
        this.$emit('getContent',{userName:this.name,email:this.email,content:this.value}); 
        this.init();
      }
    },
    checkData(name,email) {
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      let count =0;
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        this.email_tip='无效邮箱';
        count++;
      }
      if(name===''){
          this.name_tip='名字不能为空';
          count++;
      }
      if(count===0) return true;
      else return false;
    },
  },
};
</script>
<style lang="scss">
.commenta {
  width: 100%;

  margin-top: 20px;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  padding: 40px 20px;
  .comment_title {
    display: flex;
    align-items: center;
    width: 100%;
    i {
      font-size: 30px;
    }
  }
  .comment_user {
    padding-top: 10px;
    .t_ip{
        text-align: right;
        color: red;
        font-size: 16px;
    }
    span {
      white-space: nowrap;
    }
  }
  .comment_content {
    width: 100%;
    font-size: 20px;
    textarea {
      width: 100%;
      height: 100px;
      resize: none;
      border: 1px solid rgb(0, 0, 0, 0.2);
     
      outline: none;
      font-size: 24px;
      padding: 20px 20px;
      overflow: hidden;
    }
    input {
      width: 100%;
      font-size: 20px;
      border: 1px solid rgb(0, 0, 0, 0.2);
      padding: 5px;
    }
    textarea:hover,
    input:hover {
      border: 1px solid #3498db;
    }
    .comment_btn {
      width: 100%;
      text-align: end;
      padding: 10px 0;
      button {
        font-size: 16px;
        padding: 6px 20px;
        border-radius: 10px;
        background-color: transparent;
        border: 1px solid #95a5a6;
        transition: all 0.7s;
      }
      button:hover {
        border: 1px solid #3498db;
        color: #3498db;
      }
    }
  }
}
</style>