import axios from 'axios'

const request = axios.create({
    baseURL: 'http://193.112.216.112:8083',
    timeout: 6000 // 请求超时时间
})

// request 拦截器, 发起请求之前做的事
request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        // 这里处理一些请求出错的情况
        Promise.reject(error)
    }
)

// 拦截去, 请求返回后做的事情
request.interceptors.response.use(
    response => {
        return response.data
    },
    error => {

        // 这列处理一些response出错的逻辑
        return Promise.reject(error)
    }
)

export default request