<template>
    <div class="tmp">
        <span @click="close">×</span>
         <h3>输入内容</h3>
        <input type="tel" name="" id="" placeholder="标题" v-model="title">
        <textarea name="" id="" cols="30" rows="10" v-model="html"
        placeholder="内容"
        ></textarea>
        <button @click="change" >确定</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            html:'',
            title:''
        }
    },
    methods: {
        change(){
            this.$emit('getContent',{title:this.title,html:this.html});
        },
        close(){
            this.$emit('close');
        }
    },
}
</script>
<style lang="scss">
     .tmp{
         position: absolute;
         top: 40%;
         left: 50%;
         transform: translate(-50%,-50%);
         width: 500px;
         height: 500px;
         text-align: center;
         padding: 20px;
         textarea{
             width: 100%;
             height: 240px;
             line-height: 24px;
             font-size: 24px;
             outline: none;
             padding: 20px;
             resize: none;
         }
         input{
             width: 100%;
             height:18px;
             font-size: 18px;
             padding: 20px 20px;
             border: black 1px  solid;
         }
         span{
             position: absolute;
             right: 20px;
             top: 0px;
             transform: scale(3);
             cursor: pointer;
         }
     }
</style>