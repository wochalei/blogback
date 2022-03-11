<template>
    <div class="myself">
      <user :name='name' :img='img'/>
      <v-md-preview :text="text" ref="preview"></v-md-preview>
    </div>
</template>
<script>
import{getUser} from '../../../../http/user_infor'
import user from './user'
export default {
  data() {
    return {
      text: '',
      name:'',
      img:''
    };
  },
  mounted() {
    getUser()
    .then(res=>{
      let data =res.data.data[0];
      this.text= data.introduce;
      this.name= data.name;
      this.img=data.img;
    })
    .catch(e=>{
      console.log(e);
    })
  },
  components:{
    user
  }
};
</script>
<style lang="scss">
    .myself{
        color: #000;
    }
</style>