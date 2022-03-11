import axios from 'axios';
function addLink(obj) {

    return axios({
        method: 'post',
        url: '/api/friend/add',
        data: obj
    })
}
function getLink(id) {
    return axios({
        method: 'post',
        url: '/api/friend/get',
        data: {id:id}
    })
}

function deletedLink(value) {
    return axios({
        method: 'post',
        url: "/api/friend/deleted",
        data: {
            id:value
        }
    })
}
function updateLink(obj) {
    return axios({
        method: 'post',
        url: "/api/friend/update",
        data: obj
    })
}
export {
    addLink,
    getLink,
    deletedLink,
    updateLink
}