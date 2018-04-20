/*
* @Author: sutengfei
* @Date:   2018-04-14 17:21:05
 * @Last Modified by: stf
 * @Last Modified time: 2018-04-19 18:11:49
*/

// 配置API接口地址
var root = 'https://cnodejs.org/api/v1'

// 引用axios
var axios = require('axios')
/*
  接口处理函数
*/
function apiAxios (method, url, params, success) {
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false,
    timeout:1000,
    headers:{'X-Requested-with':'XMLHttpRequest'},
  })
  .then( response => {
    if (response.data.success === true) {
        success(response.data)
    } else {
        window.alert('error: ' + JSON.stringify(response.data))
    }
  })
  .catch( error => {
    if (error) {
      window.alert('api error: ' + error)
    }
  })
}
// 添加请求拦截器
axios.interceptors.request.use( config => {
  console.log("请求拦截器----->",config);
  config.timeout = 3000;
  return config;
},error => {
  return Promise.reject(error);
})
// 添加响应拦截器
axios.interceptors.response.use( response => {
  console.log("响应拦截器----->",response);
  return response;
},error => {
  return Promise.reject(error);
})
// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success) {
    return apiAxios('GET', url, params, success)
  },
  post: function (url, params, success) {
    return apiAxios('POST', url, params, success)
  },
  put: function (url, params, success) {
    return apiAxios('PUT', url, params, success)
  },
  delete: function (url, params, success) {
    return apiAxios('DELETE', url, params, success)
  }
}