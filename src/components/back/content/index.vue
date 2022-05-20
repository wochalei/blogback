<template>
    <div class="content_major" :style="{backgroundImage:`url(${img})`}">
        <div class="major">
           <router-view></router-view>
             <!-- <tip/>
             <card/>
             <page/> -->
        </div>
    </div>
</template>
<script>

export default {
    name:'content_major',
    props:['say','img'],
    mounted() {
      localStorage.setItem('say',this.say);
    },
    
}
</script>
<style lang="scss">
    .content_major{
        width: 100%;
        background-image: url('../../../../public/img/contentground.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
    .major{
        width: 1200px;
        padding:35px 0  0 0;
        margin: 0 auto;
    }
</style>