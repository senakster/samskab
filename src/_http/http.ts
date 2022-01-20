import Axios, { CancelTokenSource } from "axios";
import { authHeader, cancelSource, withCredentials } from "./auth_header";

export type TEP = {
    name: string;
    path: string;
}

const fn = {
    requestOptions,
    cancelSource,
    postRequest,
    getRequest,
    putRequest,
    deleteRequest,
}
export default fn;

export function cancelToken() {
    const cancelToken = Axios.CancelToken;
    return cancelToken.source();
}

export function requestOptions(params: { type: string, cred: boolean, source: CancelTokenSource | undefined, token?: string }) {
    const { type, cred, source, token } = params
    return {
        headers: {
            "Content-type": type,
            ...authHeader(token)
        },
        ...withCredentials(cred),
        ...cancelSource(source),
    };
}

export async function postRequest(action: TEP, query: {}, requestOptions: {}): Promise<any> {
    try {
        const response = await Axios.post(action.path, JSON.stringify(query), requestOptions)
        if(response.status > 299) throw new Error(JSON.stringify(response))
        return response;
    } catch (e: any) {
        if (Axios.isCancel(e)) {
            return "axios request cancelled";
        }
        console.log(e.message)
    }
}
export async function putRequest(action: TEP, query: {}, requestOptions: {}): Promise<any> {
    try {
        const response = await Axios.put(action.path, JSON.stringify(query), requestOptions)
        return response;
    } catch (e: any) {
        if (Axios.isCancel(e)) {
            return "axios request cancelled";
        }
        if (e?.response?.status) throw new Error(JSON.stringify(e.response.data))
    }
}
export async function getRequest(action: TEP, requestOptions: {}): Promise<any> {
    try {
        const response = await Axios.get(action.path, requestOptions)
        return response;
    } catch (e: any) {
        if (Axios.isCancel(e)) {
            return "axios request cancelled";
        }
        if (e?.response?.status) throw new Error(JSON.stringify(e.response.data))
    }
}
export async function deleteRequest(action: TEP, requestOptions: {}): Promise<any> {
    try {
        const response = await Axios.delete(action.path, requestOptions)
        return response;
    } catch (e: any) {
        if (Axios.isCancel(e)) {
            return "axios request cancelled";
        }
        if (e?.response?.status) throw new Error(JSON.stringify(e.response.data))
    }
}