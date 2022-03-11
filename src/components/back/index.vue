<template>
  <div class="back" v-if="u_data && sys_data">
    <navmenu :name="u_data.name" :img="u_data.img" />
    <tou :say="JSON.parse(u_data.say)" :img="sys_data.img_one" />
    <content :say="u_data.content_say" :img="sys_data.img_two" />
    <foo :count="sys_data.count" :online="online" />
  </div>
</template>
<script>
import tou from "./header";
import content from "./content";
import navmenu from "./header/menu";
import foo from "./footer";
import { getUser } from "../../http/user_infor";
import { getSystem, updateSystem } from "../../http/system";
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
    getUser()
      .then((res) => {
        this.u_data = res.data.data[0];
        
      })
      .catch((e) => {
        console.log(e);
      });
    getSystem()
      .then((res) => {
        this.sys_data = res.data.data[0];
        updateSystem({ count: this.sys_data.count });
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