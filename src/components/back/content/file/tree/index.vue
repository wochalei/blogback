<template>
  <div class="tree_all">
    <treeitem
      :list="item"
      v-for="(item, index) in list"
      :key="index"
      :hang="hang"
    />
  </div>
</template>

<script>
import treeitem from "./item";
export default {
  data() {
    return {
      hang: 0,
    };
  },
  props: ["list"],
  components: {
    treeitem,
  },
};
</script>
<style lang="scss">
  .tree_all{
    margin-top: 30px;
  }
</style>