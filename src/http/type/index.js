import axios from 'axios';
function addType(value){
    
   return axios({
        method:'post',
        url: '/api/blogtype/add',
        data: {
            
            type:value
        }
    })
}
function getType(id){
   return axios({
       method:'post',
       url: '/api/blogtype/searchusertype',
       data: {
        
       }
   })
}
function changeType(type,value){
    
  return axios({
      method:'post',
      url: "/api/blogtype/changeusertype",
      data: {
          type:type,
          value:value
      }
  })
}
function deletedType(value){
    return axios({
        method:'post',
        url: "/api/blogtype/deleteusertype",
        data: {
            type:value
        }
    })
}
export{
    addType,
    getType,
    changeType,
    deletedType 
}