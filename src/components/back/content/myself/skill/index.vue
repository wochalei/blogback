<template>
    <div class="my_skill">
        <span>{{item.skill}}</span>
        <span class="fill" :style="{width:item.precentage}"></span>
        <span class="percentage">{{item.precentage}}</span>
    </div>
</template>
<script>
export default {
    props:{
        item:{
            type:Object,
            default:null
        }
    }
}
</script>
<style lang="scss">
    .my_skill{
        display: flex;
        position: relative;
        align-items: center;
        width: 100%;
        height: 30px;
        font-size: 15px;
        border-radius: 35px;
        background-color: #eeeeee;
        color: #ffffff;
        padding: 0px 10px;
        .fill{
            position: absolute;
            left: 0;
            height: inherit;
            width: 0%;
            border-radius: inherit;
            background-color: skyblue;
            z-index: 1;
            transition: 0.7s;
        }
        span{
            z-index: 5;
        }
        .percentage{
            position: absolute;
            right: 10px;
            color: #000;
            opacity: 0.5;
        }
    }
</style>