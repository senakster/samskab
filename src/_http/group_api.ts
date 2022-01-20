import { AxiosResponse, CancelTokenSource } from 'axios';
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
    groups,
    getGroupById,
}
export default fn;

// RESTful API
const baseURL = "https://omstilmig.nu/API/group-dev/api/v1"
export const endpoints: {
    // [k: string]: string 
    groups: string;
} = {
    groups: '/groups',
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

export async function groups({ access_token, source }: { access_token?: string, source?: CancelTokenSource }): Promise<AxiosResponse<TGNFG[]>> {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken(), token: access_token })
    const action: TEP = { name: 'groupsIndex', path: `${baseURL}${endpoints.groups}` }
    const result = await getRequest(action, options);
    return result
}
export async function getGroupById({ access_token, source, id }: { access_token?: string, source?: CancelTokenSource, id: number }): Promise<AxiosResponse<TGNFG>> {
    const options = requestOptions({ type: contentTypes.json, cred: true, source: source || cancelToken(), token: access_token })
    const action: TEP = { name: 'getGroupById', path: `${baseURL}${endpoints.groups}/${id}` }
    const result = await getRequest(action, options);
    return result
}



