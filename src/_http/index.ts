import Axios, { CancelTokenSource } from 'axios';
import { useNavigate } from 'react-router';
import {
    TEP,
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
    requestOptions,
    cancelToken
} from './http'

const fn = {
    login,
    register,
    logout,
    refresh,
    userProfile,
    getCsrfToken,
    jwt_login,
    testCookie
}


export default fn;

// RESTful API
const baseURL = "https://omstilmig.nu/API/user/api/v1"
export const endpoints: {
    // [k: string]: string 
    users: string;
    login: string;
    jwt_login: string,
    register: string;
    logout: string;
    refresh: string;
    userProfile: string;
    testCookie: string;
    csrf: string;
    
} = {
    users: '/users',
    login: '/auth/login',
    jwt_login: '/auth/jwt-login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    userProfile: '/auth/user-profile',
    testCookie: '/auth/test',
    csrf: 'https://omstilmig.nu/API/user/sanctum/csrf-cookie'
}
Axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': 'eyJpdiI6InBYWStsMDN5ZE04ekJQQm5zUEZHTHc9PSIsInZhbHVlIjoiRDJ0d00xK3V0c3hmNU55bTlLK09pMUw5c3V2SEpZRVgxRTNqYk1wdmdaTThBQ2ZTYnVhaHpJMWRGdExXcVRvY3VtNDkxYUpCWHpkQU9naWlLazJkM1BYS0R6b0EzcGpGUjJiZ0kyUnMrWVk4SGRaQThxSy93T21iSjNMK0dERk0iLCJtYWMiOiJhYjUzYmZhODU2NjQ3NzExZDY5N2EzYTBkYTk1OWVhYzEyYjA0ZDM5NDRjYzMzMzA5NGY2MTNjNzIxZTQzYzY3IiwidGFnIjoiIn0%3D'
};

/**
 * 
 * REQUEST / RESPONSE INTERCEPTORS
 * 
 * 
 */
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log('REQUEST: ', config)
    
    // const csrf = getCookie('XSRF-TOKEN')
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    
    console.log('RESPONSE: ', response.request.responseURL);
    
    if (response.status === 401 /*unauthorised*/) {
        const navigate = useNavigate()
        console.log('redirecting to login')
        navigate('/login')
    } else {
        return response;
    }

}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

/**
 * HTTP REQUESTS
 * 
 */

const contentTypes = {
    json: 'application/json',
    form: 'multipart/form-data',
    binary: 'application/x-www-form-urlencoded',
}

export async function getCsrfToken({ source }: { source?: CancelTokenSource }){
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken() })
    const action: TEP = { name: 'csrf', path: `${endpoints.csrf}` }
    const result = await getRequest(action, options);
    return result;
}

export async function login({ email, password, source }: { email: string, password: string, source?: CancelTokenSource }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken() })
    const action: TEP = { name: 'login', path: `${baseURL}${endpoints.login}` }
    const query = { email, password }
    const result = await postRequest(action, query, options);
    return result
}

export async function jwt_login({ access_token, source }: { access_token?: string, source?: CancelTokenSource }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken() })
    const action: TEP = { name: 'jwt-login', path: `${baseURL}${endpoints.jwt_login}` }
    const query = { access_token }
    const result = await postRequest(action, query, options);
    return result
}

export async function register({ email, password, password_confirm, source }: { email: string, password: string, password_confirm: string, source?: CancelTokenSource }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken() })
    const action: TEP = { name: 'register', path: `${baseURL}${endpoints.register}` }
    const query = { email, password, password_confirm }
    const result = await postRequest(action, query, options);
    return result
}
export async function refresh({ access_token, source }: { access_token?: string, source?: CancelTokenSource }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken(), token: access_token })
    const action: TEP = { name: 'refresh', path: `${baseURL}${endpoints.refresh}` }
    const query = { access_token }
    const result = await postRequest(action, query, options);
    return result
}
export async function logout({ access_token, source }: { access_token?: string, source?: CancelTokenSource }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken(), token: access_token })
    const action: TEP = { name: 'logout', path: `${baseURL}${endpoints.logout}` }
    const query = {}
    const result = await postRequest(action, query, options);
    return result
}

export async function userProfile({ access_token, source }: { access_token?: string, source?: CancelTokenSource }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken(), token: access_token })
    const action: TEP = { name: 'userProfile', path: `${baseURL}${endpoints.userProfile}` }
    const result = await getRequest(action, options);
    return result
}


export async function testCookie({ access_token, data, source }: { access_token?: string, source?: CancelTokenSource, data: any }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken(), token: access_token })
    const action: TEP = { name: 'testCookie', path: `${baseURL}${endpoints.testCookie}` }
    const query = {data}
    const result = await postRequest(action, query, options);
    return result
}



