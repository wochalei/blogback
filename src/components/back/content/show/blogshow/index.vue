<template>
  <div class="show_content">
    <div class="content_anchor">
       <h3>目录</h3> 
    <div
      v-for="(anchor, index) in titles"
      :key="index"
      :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
      @click="handleAnchorClick(anchor,index)"
      :class="{anchor_ative:index==active}"
    >
      <a style="cursor: pointer">{{ anchor.title }}</a>
    </div>
    </div>
    <div class="show_blog">
    <v-md-preview :text="text" ref="preview"></v-md-preview>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titles: [],
      active:0
    };
  },
  props: ["text"],
  mounted() {
    const anchors =
      this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
    
    const titles = Array.from(anchors).filter(
      (title) => !!title.innerText.trim()
    );

    if (!titles.length) {
      this.titles = [];
      return;
    }

    const hTags = Array.from(
      new Set(titles.map((title) => title.tagName))
    ).sort();

    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute("data-v-md-line"),
      indent: hTags.indexOf(el.tagName),
    }));
  },
  methods: {
    handleAnchorClick(anchor,index) {
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      );
      this.active=index;
      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.show_content {
  display: flex;
  
  width: 100% ;
  
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding-right:20px;
  .content_anchor {
      position:sticky;
      width: 200px;
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      
      right: 90px;
      top: 30px;
      font-size: 15px;
      padding: 30px;
      color: #34495e;
      background-color: #fff;
      border-radius:10px;
     h3{
       width: 100px;
     } 
     a:hover{
         color: tan;
     }
     a{ 
       display: block;
        min-width: 150px;
        overflow: hidden;
     }
   
  }
  .show_blog{
    flex: 1;
    overflow: hidden;
  }
  .anchor_ative{
     color: tan;
  }
}
</style>