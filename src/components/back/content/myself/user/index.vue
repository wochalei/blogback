<template>
    <div class="myself_user">
        <div class="my_img"><img :src="img" alt=""></div>
        <h2>{{name}}</h2>
    </div>
</template>
<script>
export default {

    props:['img','name']
}
</script>
<style lang="scss">
    .myself_user{
        background-color: white;
        padding: 20px 0;
        .my_img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto;
            overflow: hidden;
            margin-bottom: 20px;
        }
        h2{
            text-align: center;
            color: #636e72;
        }
    }
</style>