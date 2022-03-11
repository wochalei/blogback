<template>
  <div :style="{ marginLeft: hang + 'px' }" class="t_i">
    <h2 @click.prevent="change" v-if="list.kids">{{ list.name }}</h2>
    <h2 v-else @click.prevent="turn(list.blog_id)">{{ list.title }}</h2>
    <div v-show="flag">
      <treeitem
        v-for="(item, index) in list.kids"
        :key="index"
        :list="item"
        :hang="hang + 20"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "treeitem",
  data() {
    return {
      flag: false,
    };
  },
  props: {
    list: {
      type: Object,
    },
    hang: {},
  },
  methods: {
    change() {
      this.flag = !this.flag;
    },
    turn(id){
      this.$router.push({path:'/show', query: { blog_id:id}})
    }
  },
};
</script>
<style lang="scss">
.t_i {
  h2 {
    width: 100%;
    background-color: skyblue;
    padding: 20px 0;
    padding-left: 20px;
    transition: all 0.7s;
    cursor: pointer;
    color: white;
    -webkit-user-select: none;
  }
  h2:hover {
    background-color: gray;
    color: white;
  }
}
</style>