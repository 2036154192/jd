import axios from 'axios';

const HTTPURL = 'https://www.fastmock.site/mock/e51140f8c9a684f30659c7049cc27cd1/mu'
//post请求
export function postData(url,data = {}){
    return axios.post(url,data,{
        baseURL:HTTPURL,
        headers:{
            "Content-Type": "application/json"
        }
    })
}

export function getData(url){
    return axios.get(url,{
        baseURL:HTTPURL,
        headers:{
            "Content-Type": "application/json"
        }
    })
}