import axios from 'axios';
import { auth } from "../../auth";
const httpService = (
    serviceUrl,
    type = 'get',
    data,
    service = 'user',
    multipart = false,
    additionalHeaders = {},
    stream = false,
    additionalConfig = {},
) => {
    let BASE_URL = "http://103.154.233.102:8080"; //provide url

    const config = {
        headers: {
            'Access-Control-Allow-Orgin': '*',
        },
        ...additionalConfig,
    };
    if(additionalHeaders){
        config.headers = {...config.headers,...additionalHeaders};
    };

    if(multipart) config.headers['Content-Type'] = 'multipart/form-data';
    if(stream) config['responseType'] = 'blob';
    const { getSessionData } = auth();
    let { accessToken} = getSessionData()
    if(accessToken && !serviceUrl.includes("search") && !serviceUrl.includes("stats")){
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    let url = '';
    url = `${BASE_URL}/${service}/${serviceUrl}`;
    switch(type){
        case 'get':{
            const promise = axios.get(url,config);
            return promise;
        }
        case 'post':
        case 'put' :
        case 'patch':
            return axios[type](url, data, config);
        case 'delete':
            return axios.delete(url, config);
        default: {
            break;
        }
    }
    return null;
};

export default httpService;
