<template>
 
    <div class="table">
       
      <table id="t_x">
        <thead>
          <tr>
          <th v-for="(item, index) in title" :key="index">{{item}}</th>
          </tr>     
        </thead>
        <tbody>
          <slot name="body"></slot>
        </tbody>
      </table>
    </div>
    

</template>
<script>

export default {
   data() {
       return {
       }
   },
   props:{
     title:Array
   }
};
</script>
<style lang="scss">

 #t_x{
     border-collapse: collapse;
     width: 100%;
     tr{
       display: flex;
       cursor: pointer;
       transition:background-color .7s ;
       padding-top: 15px;
       padding-bottom:15px ;
        border-bottom: 1px solid #dcdfe6;
       td,th{
         width: 200px;
         text-align: center;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
       }
       td{
         line-height: 35px;
         
       }
       td:nth-child(1),th:nth-child(1){
          width: 100px;
       }
       td:nth-child(2),th:nth-child(2){
           flex: 1;
           
       }
     }
     tbody{
       height: 660px;
      tr:hover{
       background-color: rgba(165, 164, 164,0.5);
      
      }
     }
     
     button{
     padding: 6px 12px;
     margin: 0 5px;
     cursor: pointer;
     border-radius: 4px;
    }
 }

</style>