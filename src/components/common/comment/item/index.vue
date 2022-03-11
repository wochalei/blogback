<template>
  <div class="comment_item">
    <div class="comment_img">
      <img src="../../../../../public/img/user.jpg" />
    </div>
    <div class="comment_box">
      <div class="comment_user">
        <div class="comment_name">{{ item.userName }}</div>
        <div class="comment_say">{{ item.content }}</div>

        <div class="comment_fun">
          <span class="comment_time">{{ item.time }}</span>
          <!-- <span class="comment_replay" @click="replay">回复</span> -->
          <!-- <comment v-if="flag" @getContent="getContent" :value="content" /> -->
        </div>
      </div>

      <min v-for="(kid, index) in item.kids" :key="index" :kid='kid' />
    </div>
  </div>
</template>
<script>
import min from "./min";

export default {
  data() {
    return {
     
    };
  },
  components: {
    min,
  },
  props: {
    item: Object,
  },

};
</script>
<style lang="scss">
.comment_item {
  display: flex;
  width: 100%;
  padding: 0 20px;
  background-color: #fff;
  font-size: 15px;
  .comment_img {
    flex-shrink: 0;
    width: 5%;
    height: 5%;
    border-radius: 50%;
    margin-right: 2%;
    overflow: hidden;
  }
  .comment_user {
    .comment_name {
      font-weight: 600;
    }
    .comment_say {
      text-align: justify;
      padding: 1% 0;
    }
  }
  .comment_fun {
    cursor: pointer;
    color: #7f8c8d;
    .comment_replay {
      margin-left: 1%;

      color: #3498db;
    }
    .comment_replay:hover {
      color: #e74c3c;
    }
  }
  .comment_box {
    flex: 1;
    border-bottom: 1px solid #bdc3c7;
    margin-bottom: 10px;
  }
}
</style>