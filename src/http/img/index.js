 import {http} from '../../config/httpConfig'
 import axios from 'axios';

 function addImg(data){
   return  axios.post('/api/img',data);
 } 
 
 export {
    addImg
};