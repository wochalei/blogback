<template>
  <div class="information_u">
    <form ref="f_user" @submit.prevent="false">
      <table class="u_iformation">
        <tr>
          <td>账号名：</td>
          <td><input type="text" name="name"  v-model="name"/></td>
        </tr>
        <tr>
          <td>密码：</td>
          <td><input type="text" name="password"  v-model="password"/></td>
        </tr>
        <tr>
          <td>个性说说：</td>
          <td><input type="text" placeholder="可添加多句" v-model="say_value"/></td>
          <td>
            <button @click="say.push(say_value);say_value=''">添加</button>
            <button @click="say=[]">清空</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td class="t_say" colspan="2">{{ say }}</td>
        </tr>
        <tr>
          <td>内容说说tip：</td>
          <td><input type="text" name="content_say" v-model="tip" /></td>
        </tr>
        <tr>
          <td>用户logo：</td>
          <td v-if="imgchange">
            <input name='img' type="text" placeholder="网上url或本地上传" v-model="url" />
          </td>
          <td v-else><input type="file" id="file" name='img' /></td>
          <td><button @click="imgchange = !imgchange">切换方式</button></td>
        </tr>
        <tr>
          <td></td>
          <td class="u_btn"><button @click="submit">保存</button></td>
        </tr>
      </table>
    </form>
  </div>
</template>
<script>
import {updateUser,getUser} from '../../../../http/user_infor'
export default {
  data() {
    return {
      say_value:'',
      say: [],
      url:'',
      name:'',
      tip:'',
      password:'',
      imgchange: true,
    };
  },
  methods: {
    submit(e) {
      let table = this.$refs.f_user;
      let data = new FormData(table);
      data.append('say',JSON.stringify(this.say) );
      console.log(JSON.stringify(this.say) );
      data.append('user_id',localStorage.getItem('user_id'));
      updateUser(data)
      .then(data=>{
        
        alert('修改成功')
      })
      .catch(e=>{
        console.log(e);
      })
    },
    init(data){
        this.say=JSON.parse(data.say);
        this.tip =data.content_say;
        this.name = data.name;
        this.url=data.img;
        this.password=data.password;
    }
  },
   mounted() {
      getUser()
      .then(res=>{
        let data =res.data.data[0];
        this.init(data);
      })
      .catch(e=>{
        console.log(e);
      })
   },
};
</script>
<style lang="scss">

.u_iformation {
 
  width: 80%;
  max-width: 900px;
  min-width: 600px;
  border-spacing: 20px ;
  margin: 80px auto;
  td:nth-child(1) {
    white-space: nowrap;
    text-align: right;
  }
  td:nth-child(2) {
    width: 60%;
  }

 
  input {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-indent: 10px;
  }
  .t_say {
    text-align: left !important;
  }
  #file {
    width: auto;
    height: unset;
    text-indent: 0;
    border: none;
    border-radius: 0;
  }
  .u_btn {
    text-align: center;
    button {
      margin: 20px;
    }
  }
}
</style>