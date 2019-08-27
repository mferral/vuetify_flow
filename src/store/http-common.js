import axios from "axios";

export const HTTP  = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mferral/json-server/',
});
 
// HTTP.interceptors.request.use((request) => {
//   if(localStorage.getItem('token')){
//     request.headers.Authorization = 'Token '+localStorage.getItem('token');
//   }  
//   return request;
// });
