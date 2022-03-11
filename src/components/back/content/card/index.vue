<template>
    <div class="card">
      
         <carditem v-for="(item, index) in list" :key="index" :item='item'></carditem>
     
    </div>
</template>
<script>
import carditem from './item'
export default {
    name:'card',
    components:{
        carditem
    },
    props:{
        list:Array
    }
}
</script>
<style lang="scss">
    .card{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 15px;
        margin-top: 20px;
    }
</style>