import axios from 'axios';

function addBlog(data) {
    let tmp = {
        title: data.title,
        summary: data.summary,
        content: data.content,
        type: data.type ,
        coverImg: data.coverImg ||'',
        img: data.img,
        created: Date.now(),
       
    }
     
    return axios.post("/api/blog/add", tmp);

}

function searchAll(obj){
   
    let data ={title:obj.title,blog_id:obj.blog_id,page:obj.page,pageSize:obj.pageSize}
  
    return axios.post("/api/blog/search",data);
}
function searchPublic(obj){
   
    let data ={title:obj.title,blog_id:obj.blog_id,page:obj.page,pageSize:obj.pageSize}
    
    return axios.post("/api/blog/search_public",data);
}
function updateBlog(data){
    let tmp = {
        title: data.title,
        summary: data.summary,
        content: data.content,
        type: data.type ||"html",
        coverImg: data.coverImg,
        img: data.img,
        updated: Date.now(),
         blog_id:data.blog_id
    }
    console.log(tmp);
    return axios.post("/api/blog/update",tmp);
}
function deletedBlog(blog_id){
  return axios({
      method:'post',
      url: '/api/blog/delete',
      data: {
        blog_id:blog_id
      }
  })
}
function searchType(obj){
    let data ={title:obj.title,blog_id:obj.blog_id,page:obj.page,pageSize:obj.pageSize,type:obj.type}
  
    return axios.post("/api/blog/type",data);
}
function getAll(){
    return axios({
        method:'post',
        url: '/api/blog/searchAll',
        data: {}
    })
}
export {
    addBlog,
    updateBlog,
    searchAll,
    deletedBlog,
    searchType,
    searchPublic,
    getAll
}