<template>
    <div class="file">
        <div v-if="treeData">
        <tree :list='treeData'/>
        </div>
    </div>
</template>
<script>
import tree from './tree'
import {blog} from "../../../../http/api"
import {dataToTree} from '../../../../utils.js/tools'
export default {
    data() {
        return {
            treeData:'',
           
        }
    },
    components:{
        tree
    },
    mounted() {
        
        blog.getAll()
        .then(res=>{

          this.treeData= dataToTree(res.data.data);
          
        })
        .catch(e=>{
            console.log(e);
        })
        
        
        
    },
}
</script>
<style lang="scss">
    .file{
        color: #000;
        min-height: 100vh;
    }
</style>