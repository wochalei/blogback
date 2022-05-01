<template>
  <div class="back">
    <navmenu :name="u_data.name" :img="u_data.img" />
    <tou v-if="u_data" :say="JSON.parse(u_data.say)" :img="sys_data.img_one" />
    <content :say="u_data.content_say" :img="sys_data.img_two" />
    <foo :count="sys_data.count" :online="online" />
  </div>     
</template>
<script>
import {user_infor,system} from '../../http/api'
import tou from "./header";
import content from "./content";
import navmenu from "./header/menu";
import foo from "./footer";
import loading from '../common/loading'
import {socket} from '../../main'
export default {
  name: "back",
  data() {
    return {
      u_data: "",
      sys_data: "",
      online: 1,
      
    };
  },
  components: {
    tou,
    content,
    navmenu,
    foo,loading
  },
  methods: {
    longtime() {
         socket.on("new", (tmp) => {
         this.online=tmp;
       });
    },
  },

  mounted() {
    user_infor.getUser()
      .then((res) => {
        console.log(res);
        this.u_data = res.data.data[0];
      })

    system.getSystem()
      .then((res) => {
         console.log(res);
        this.sys_data = res.data.data[0];
        system.updateSystem({ count: this.sys_data.count });
      })
    this.longtime();
  
  },
};
</script>
<style lang="scss">

</style>