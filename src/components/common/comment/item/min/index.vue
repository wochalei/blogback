<template>
  <div class="min">
    <div class="item_min">
      <span class="min_user">{{kid.userName+' : '}}</span>
      <!-- <span class="min_relay">回复</span> -->
      <!-- <span class="target">{{kid.targetName}} :</span> -->
      <span class="min_content">{{kid.content}} </span>
    </div>
    <div class="comment_fun">
      <span class="comment_time">{{kid.time}}</span>
      <!-- <span class="comment_replay" @click="replay">回复</span> -->
      <!-- <comment v-if="flag" @getContent="getContent" /> -->
    </div>
  </div>
</template>
<script>
/* import itembox from "../index.vue";
import comment from '../../index.vue'; */
/* import {eventBus} from '../../../../../utils.js/bus';
import {add} from '../../../../../http/comment/index' */
export default {
  data() {
    return {
  /*     flag:false,
      comment: {
        content: "",
        blog_id: 0,
        userName: localStorage.getItem("userName"),
        targetName: "",
        target_id: 0,
        pid: 0,
        time: 0,
      }, */
    }
  },
  components: {
    /* itembox,
    comment */
  },
 /*  methods: {
    replay(){
            this.flag=!this.flag;
    },
     getContent(value) {
      this.comment.content = value;
      this.comment.time = Date.now();
      this.comment.targetName = this.kid.userName;
      this.comment.pid = this.kid.pid;
      this.comment.target_id = this.kid.user_id;
      this.comment.blog_id = this.kid.blog_id;
      add(this.comment)
        .then((res) => {
          this.content = "";
          if (res.data.error != 1) {
             this.flag=false;
              eventBus.$emit("refesh");
            alert("评论成功");
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }, */
  props:{
    kid:Object
  }
};
</script>
<style lang="scss">
.item_min {
  color: #e74c3c;
  margin: 5px 0px;
  .min_relay {
    color: #3498db;
    margin: 0 10px;
  }
  .min_user,
  .target {
    font-weight: 600;
  }
  .min_content {
    color: #000;
    text-align: justify;
  }
}
.min_fn {
  color: #7f8c8d;
}
</style>