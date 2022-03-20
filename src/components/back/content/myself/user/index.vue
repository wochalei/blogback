<template>
   
    <div class="myself_user">
        <div class="my_my"> 
        <div class="my_img"><img :src="img" alt=""></div>
        <p class="my_name">{{name}}</p>
        <p class="my_worker">前端开发</p>
        </div>
        <p class="my_say">
            If you wish to succeed, you should use persistence as your good friend, experience as your reference, prudence as your brother and hope as your sentry.
        </p>
    </div>
</template>
<script>
export default {

    props:['img','name']
}
</script>
<style lang="scss">
.myself_user{
    margin-top: -90px;
    
}
    .my_my{
         width: 369px;
         margin: 0 auto;
               
        .my_img{
            width: 160px;
            height: 160px;
            border-radius: 50%;
            margin: 0 auto;
            
            overflow: hidden;
            margin-bottom: 20px;
        }
        .my_name{
            text-align: center;
            color:#3c4858;
            font-size: 27px;
            margin-bottom: 8px;
            text-align: center;
        }
        .my_worker{
            font-size: 13.5px;
            color: #777777;
            margin-bottom: 37px;
            text-align: center;
        }
       
    }
     .my_say{
             margin: 0 auto;
             max-width: 600px;
             width: 80%;
             font-size: 15px;
             line-height: 22.5px;
             text-align: center;
             color: #999999;
        }
</style>