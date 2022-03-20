<template>
    <div class="album">
        <div class="album_img"><img src="https://diy-sprint.top/medias/featureimages/0.jpg" alt="" srcset=""></div>
        <div class="album_img"><img src="https://diy-sprint.top/medias/featureimages/1.jpg" alt="" srcset=""></div>   
         <div class="album_img"><img src="https://diy-sprint.top/medias/featureimages/2.jpg" alt="" srcset=""></div>   
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .album{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 20px;
        padding: 0 20px;
        .album_img{
          height: 205px;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
          img{
              width: 100%;
              height: 100%;
          }
          &:hover{
              transform: scale(1.05);
          }   
        }
    }
</style>