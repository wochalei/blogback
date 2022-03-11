import axios from 'axios';
function add(data){
    return axios({
        method:'post',
        url: '/api/comment/add',
        data: data
    })     
}
function get(obj){
    return axios({
        method:'post',
        url: '/api/comment/get',
        data: {
            blog_id:obj.blog_id,
        }
    })  
}
function deleted(id){
    return axios({
        method:'post',
        url: '/api/comment/deleted',
        data: {
            id
        }
    })  
}
function reply(data){
    return axios({
        method:'post',
        url: '/api/comment/reply',
        data: data
    })  
}
export{
    add,
    get,
    deleted,
    reply,
}