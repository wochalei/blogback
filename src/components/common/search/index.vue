<template>
  <div class="search">
    <input type="text" :placeholder="tip" v-model="text"/>
    
    <button @click="search">查询</button>
  </div>
</template>
<script>

export default {
    data() {
        return {
            text:''
        }
    },
    props:{
        tip:String
    },
    methods: {
     search(){

       this.$emit("value",this.text);
     }
    },
};
</script>
<style lang="scss">
.search {
  input {
    width: 400px;
    border: 1px solid #dcdfe6;
    color: #666;
    text-indent: 8px;
    padding: 6px;
  }
  input::-webkit-input-placeholder {
    color: #7777;
  }
  button {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
}
</style>