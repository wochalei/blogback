<template>
    <div class="footer">
        <h3><span>访问量：{{count}}</span></h3>
        <h3><span>在线人数：{{online}}</span></h3>
    </div>
</template>
<script>
export default {
    props:{
        count:{
            default:0
        },
        online:{
            default:1
        }
    }
}
</script>
<style lang="scss">
    .footer{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: skyblue;
        h3{
            width: 100px;
            height: 50px;
            line-height: 50px;
        }
    }
</style>