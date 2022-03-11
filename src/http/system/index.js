import axios from 'axios'
function getSystem(){
    return axios({
        method:'post',
        url: '/api/system/get',
        data: {
            
        }
    })
}
function updateSystem(obj){
    return axios({
        method:'post',
        url: '/api/system/update',
        data: obj
    })
}

export{
    updateSystem,
    getSystem,
   
}