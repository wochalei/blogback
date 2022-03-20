<template>
  <div class="myself_title">
    <i :class="icon"></i>
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: ['title', 'icon'],
  mounted() {
  },
};
</script>
<style lang="scss">
.myself_title {
  text-align: center;
  font-size: 30px;
  color: #34495e;
  margin: 40px 0;
  i {
    font-size: 30px;
    margin: 8px 0;
  }
  span {
    margin-left: 20px;
  }
}
</style>