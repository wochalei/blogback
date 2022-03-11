<template>
  <div :class="{ limit: true, menu_active: flag }">
    <div class="menu">
      <div class="menu_user">
        <!-- <div class="menu_logo">
          <img :src="img" />
        </div> -->
        <div class="menu_name">{{name+"的小站"}}</div>
      </div>
      <ul :class="{ menu_nav: true, menu_nav_aticve: display }">
        <li @click="move" data-route="">
          <i class="iconfont icon-shouye-shouye"></i><span>首页</span>
        </li>
        <!-- <li @click="move" data-route="label">
          <i class="iconfont icon-24gl-tags3"></i><span>标签</span>
        </li> -->
        <li @click="move" data-route="type">
          <i class="iconfont icon-fenlei"></i><span>分类</span>
        </li>
        <li @click="move" data-route="file">
          <i class="iconfont icon-guidang"></i><span>归档</span>
        </li>
        <li @click="move" data-route="myself">
          <i class="iconfont icon-guanyuwomen"></i><span>个人</span>
        </li>
        <li @click="move" data-route="link">
          <i class="iconfont icon-lianjie"></i><span>友链</span>
        </li>
        <li @click="move" data-route="end">
          <i class="iconfont icon-riqi"></i><span>管理</span>
        </li>
        <li class="searchtpa">
          <!-- <div class="searchz"><input type="text" v-model="text"></div> -->
          <i @click="search" class="iconfont icon-sousuo"></i>
        </li>
      </ul>
      <div @click="display_menu" class="menu_flag">
        <div class="menu_show"></div>
      </div>
    </div>
    <searchaz v-show="show_search" @change="change"></searchaz>
  </div>
</template>
<script>
import searchaz from "./search/index.vue";
import { eventBus } from "../../../../utils.js/bus";
export default {
  name: "menu_menu",
  data() {
    return {
      flag: false,
      show_search: false,
      display: false,
    };
  },
  methods: {
    move(e) {
      /* parentElement */
      let router = e.target;
      if (router.nodeName != "LI") router = e.target.parentElement;
      if (this.$route.path === "/" + router.dataset.route) this.renew();
      else this.$router.push({ path: `/${router.dataset.route}` });

      window.scrollTo(0, window.innerHeight);
    },
    search() {
      this.show_search = true;
      /*  eventBus.$emit('title',this.text);
       this.text=''; */
    },
    change(value) {
      this.show_search = value;
    },
    renew() {
      eventBus.$emit("renew");
    },
    display_menu() {
      this.display = !this.display;
    },
  },
  mounted() {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    };
    window.onclick = (e) => {
      let tar = e.target.closest(".search_tip"),
        other = e.target.closest(".searchtpa");
      let compare_menu = e.target.closest(".menu_flag");

      if (tar == null && other == null) {
        this.show_search = false;
      }
      if (compare_menu == null) this.display = false;
    };
  },
  components: {
    searchaz,
  },
  props:['name','img']
};
</script>
<style lang="scss">
.limit {
  position: sticky;
  top: 0;
  left: 0px;
  z-index: 66;
}
.menu_active {
  background-color: skyblue;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 64px;
  margin: 0 auto;
  margin-bottom: -64px;

  .menu_user {
    display: flex;
    align-items: center;
    font-size: 0.64rem;
    .menu_name{
      font-size: 24px;
      font-weight: 600;

    }
    .menu_logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
      overflow: hidden;
    }
  }
  .menu_nav {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 80px;
      cursor: pointer;
    }
    li:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
.searchtpa {
  i {

  }
}
.searchz {
  width: 200px;

  input {
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
  }
}
</style>
