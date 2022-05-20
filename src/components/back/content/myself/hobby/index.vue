<template>
    <div class="hobby">
        <div class="hobby-item">
            <img src="../../../../../../public/img/swim.png" alt="">
            <p>游泳</p>
        </div>
        <div class="hobby-item">
            <img src="../../../../../../public/img/run.png" alt="">
            <p>跑步</p>
        </div>
        <div class="hobby-item">
            <img src="../../../../../../public/img/steam.png" alt="">
            <p>饥荒</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .hobby{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        .hobby-item{
            img{
                display: block;
                margin: 0 auto;
                width: 80px;
                height: 80px;
                margin-bottom: 15px;
            }
            p{
               color: #34495e;
               font-size: 18.75px;
               text-align: center;
               margin-bottom: 15px;
            }
        }
    }
</style>