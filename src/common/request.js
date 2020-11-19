import axios from 'axios';

//  自定义Axios实例
const AJAX = axios.create({
    baseURL: "",
    timeout: 30000,
    withCredentials: ""
});

// 添加请求拦截器
AJAX.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
AJAX.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // 对响应错误做点什么，比如400、401、402等等
    if (error && error.response) {
        console.log(error.response)
    }
    return Promise.reject(error);
});


export default {
    get(url, param = {}, headers = {}) {
        return AJAX.get(url, {
            params: param,
            headers,
        })
    },
    post(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers,
        })
    },
    put(url, param = null, headers = {}) {
        return AJAX.put(url, param, {
            headers,
        })
    },
    file(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: Object.assign({
                'Content-Type': 'multipart/form-data'
            }, headers)
        })
    },
    delete(url, param = null, headers = {}) {
        return AJAX.delete(url, {
            param,
            headers: Object.assign({
                'Content-Type': 'multipart/form-data'
            }, headers)
        })
    }
}
