<template>
  <div class="commenta">
    <div class="comment_title">
      <i class="iconfont icon-pinglun"></i>
    </div>

    <div class="comment_content">
      <div class="comment_user">
         <div>
        <span>昵称:</span> <span class="t_ip">{{userName.valueFlag}}</span>
        <input type="text" name="comment_user_name" v-model="userName.value" />
        
        </div> 
        <div>
        <span>邮箱:</span> <span class="t_ip">{{email.valueFlag}}</span>
        <input type="email" name="comment_user_email" v-model="email.value" />

        </div>
      </div>
      <span class="t_ip">{{text.valueFlag}}</span>
      <textarea name="" cols="30" rows="10" v-model="text.value"></textarea>
      <div class="comment_btn"><button @click="emit">提交</button></div>
    </div>
  </div>
</template>
<script>
import { check } from '../../../utils.js/defend';
import strategies from '../../../utils.js/formCheck';
import {reactive} from 'vue'
export default {
  name: "commenta",
  data() {
    return {
        userName: reactive({value:"",valueFlag:""}),
        email:reactive({value:"",valueFlag:""}),
        text:reactive({value:"",valueFlag:""})
    };
  },
  methods: {
    init(){
        this.userName= reactive({value:"",valueFlag:""});
        this.email=reactive({value:"",valueFlag:""});
        this.text=reactive({value:"",valueFlag:""});
    },
    emit() {
     let flag= this.checkFrom.check();
      if(flag){
        this.$emit('getContent',{userName:this.userName.value,email:this.email.value,content:this.text.value}); 
        this.init();
      }
    }
    
  },
  mounted() {
      this.checkFrom = new strategies();

      this.checkFrom.add(this.userName,'isEmpty')
      .add(this.email,"isEmpty")
      .add(this.email,"isEmail")
      .add(this.text,"isEmpty");
  }
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
    
    span {
      white-space: nowrap;
    }
  }
  .t_ip{
        text-align: right;
        color: red;
        font-size: 16px;
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