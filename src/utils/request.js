import { getToken, setToken } from '@/utils/utils'
import { Message } from 'element-ui'
import router from "@/router"

import axios from "axios"
const service = axios.create()
service.defaults.baseURL = process.env.API_ROOT
service.defaults.headers.post["Content-Type"] = "application/json"

let lastConfig = null
    // 添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    config.headers['client-type'] = 'web'
    if (config.url.indexOf('login') === -1) {
        config.headers['Authorization'] = getToken()
    }
    lastConfig = config
    return config;
}, function(error) {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应数据做点什么
    if (response.data.rc === 1001) {
        setToken(response.data.data)
        return service(lastConfig)
    }
    return response
}, (error) => {
    // 对响应错误做点什么
    // console.log(error.response.status)
    if (error.response.status == 401) {
        Message({
            message: '登录信息已失效请重新登录',
            type: 'error',
            duration: 1000
        })
        setTimeout(() => {
            router.push({ path: "/user/login" })
        }, 1000)
    } else if (error.response.status == 403) {
        Message({
            message: '您没有执行该操作的权限',
            type: 'error',
            duration: 2 * 1000
        })
    } else if (error.response.status == 404) {
        router.push({ path: "/404" })
    } else if (error.response.status == 500) {
        Message({
            message: '服务器异常，请稍后重试',
            type: 'error',
            duration: 2 * 1000
        })
    }
    return Promise.reject(error)
})
export default service