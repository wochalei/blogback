import axios from "axios";
axios.interceptors.request.use(config => {
    let data = config.data;
   let user_id= localStorage.getItem('user_id');
   data.user_id=user_id;

return config;
},error => {

return Promise.reject(error);
});
export{

}