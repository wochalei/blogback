<template>
  <div class="back" v-if="u_data && sys_data">
    <navmenu :name="u_data.name" :img="u_data.img" />
    <tou :say="JSON.parse(u_data.say)" :img="sys_data.img_one" />
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
    foo,
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
        this.u_data = res.data.data[0];
        
      })
      .catch((e) => {
        console.log(e);
      });
    system.getSystem()
      .then((res) => {
        this.sys_data = res.data.data[0];
        system.updateSystem({ count: this.sys_data.count });
      })
      .catch((e) => {
        console.log(e);
      });
    this.longtime();
  
  },
};
</script>
<style lang="scss">
</style>