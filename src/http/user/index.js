import axios from 'axios'
function addUser(data){
  return axios({
       method:'post',
       url: '/api/user/add',
       data: {
           name:data.name,
           password:data.password
       }
   })
}

function loginUser(data){
    return axios({
        method:'post',
        url: '/api/user/login',
        data: {
            name:data.name,
            password:data.password
        }
    })
}
function checkUserId(){
    return axios({
        method:'post',
        url: '/api/user/check',
        data: {}
    })
}
function getUser(){
    return axios({
        method:'post',
        url: '/api/user/information',
        data: {
            
        }
    })
}
export{
    addUser,
    loginUser,
    checkUserId,
    getUser
}