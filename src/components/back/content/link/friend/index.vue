<template>
    <div class="friend">
<fitem v-for="(item, index) in data" :key="index" :item='item' />
    </div>
</template>
<script>
import fitem from './item'
export default {
    components:{
        fitem
    },
    props:['data']
}
</script>
<style lang="scss">
    .friend{
        display: grid;
        padding: 30px;
        
        grid-template-columns: repeat(3,1fr);
        grid-gap: 10px;
    }
</style>