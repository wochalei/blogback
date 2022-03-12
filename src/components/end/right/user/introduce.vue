<template>
  <div>
     <v-md-editor v-model="text" 
     left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save | tip "
     height='100vh'
     @save='save'
     />
  </div>
</template>
<script>
import {user_infor} from '../../../../http/api'
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    save(text){
      user_infor.updateIntroduce({introduce:text})
      .then(res=>{
           alert("保存成功");
      })
      .catch(e=>{
        console.log(e);
      })
    }
  },
  mounted() {
    user_infor.getUser({choose:true})
    .then(res=>{
      this.text= res.data.data[0].introduce;
    })
    .catch(e=>{
      console.log(e);
    })
  },
};
</script>
<style lang="scss">
</style>