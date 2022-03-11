<template>
    <div class="typeadd">
        <span @click="close">×</span>
        <input type="text"  placeholder="输入新分类" v-model="text"> 
        <button @click="add">{{btn_text}}</button>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
             text:'',
             
        }
    },
    methods: {
        close(){
         this.$emit('close',false);
        },
        add(){
            console.log(this.text);
            this.$emit('add',this.text);
        } 
    },
    props:{
        btn_text:String
    }
}
</script>
<style lang="scss">
    .typeadd{
        position:fixed;
        left: 50%;
        top: 30%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 400px;
        height: 300px;
        background-color: rgba(0, 0, 0,0.2);
        border-radius: 5px;
        padding: 0 10px;
        
        input{
            padding: 10px;
           
            border-radius: 5px;
            margin-bottom:30px ;
        }

        span{
            position: absolute;
            right: 10px;
            top: 0;
            font-size: 26px;
            cursor: pointer;
        }
        span:hover{
             color: wheat;
        }
    }
</style>