import axios from 'axios';
function getUser(obj) {
   obj=obj? obj:{};
   
    return axios({
        method: 'post',
        url: '/api/useriformation/get',
        data: {choose:obj.choose}
    })
}

function updateUser(obj) {
    return axios({
        method: 'post',
        url: "/api/useriformation/update",
        data: obj
    })
}
function updateIntroduce(obj) {
    return axios({
        method: 'post',
        url: "/api/useriformation/introduce",
        data: obj
    })
}
export {

    getUser,
    updateIntroduce,
    updateUser
}