import { CancelTokenSource } from 'axios';

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
    users,
    getUserById,
}


export default fn;

// RESTful API
const baseURL = "https://omstilmig.nu/API/user/api/v1"
export const endpoints: {
    // [k: string]: string 
    users: string;
} = {
    users: '/users',
}

/**
 * HTTP REQUESTS
 * 
 */

const contentTypes = {
    json: 'application/json',
    form: 'multipart/form-data',
    binary: 'application/x-www-form-urlencoded',
}

export async function users({ access_token, source }: { access_token?: string, source?: CancelTokenSource }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken(), token: access_token })
    const action: TEP = { name: 'usersIndex', path: `${baseURL}${endpoints.users}` }
    const result = await getRequest(action, options);
    return result
}
export async function getUserById({ access_token, source, id }: { access_token?: string, source?: CancelTokenSource, id: number }) {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken(), token: access_token })
    const action: TEP = { name: 'getUserById', path: `${baseURL}${endpoints.users}/${id}` }
    const result = await getRequest(action, options);
    return result
}



