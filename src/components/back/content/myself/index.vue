<template>
    <div class="myself">
      <user :name='name' :img='img'/>
      <hr>
      <!-- <v-md-preview :text="text" ref="preview"></v-md-preview> -->
      <div class="charts">
        <chart :option='optionA' :width='width' :height='height'/>
        <chart :option='optionB' :width='width' :height='height'/>
      </div>
      
    </div>
</template>
<script>
import {user_infor} from '../../../../http/api'
import chart from '../../../charts'
import user from './user'
import {optionA,optionB} from '../../../charts/option'
export default {
  data() {
    return {
      text: '',
      name:'',
      img:'',
      optionA,
      optionB,
      width:'100%',
      height:'250px'
    };
  },
  mounted() {
   
    user_infor.getUser()
    .then(res=>{
      let data =res.data.data[0];
      this.text= data.introduce;
      this.name= data.name;
      this.img=data.img;
    })
  },
  components:{
     user,
     chart
  }
};
</script>
<style lang="scss">
    .myself{
        color: #000;
        min-height:100vh;
        background-color: white;
        padding-top: 50px;
    }
    .charts{
      display: grid;
      width: 100%;
      
      grid-template-columns: repeat(2,1fr);
      justify-items: center;
    }
</style>