import { CancelTokenSource } from "axios";

export function authHeader(token?: string) {
    // return authorization header with jwt token
    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}

export function withCredentials(bool: boolean) {
    if (bool) {
        return { 'withCredentials': true, }
    } else {
        return {};
    }
}
export function cancelSource(source?: CancelTokenSource) {
    if (source) {
        return { cancelToken: source.token }
    } else {
        return {};
    }
}