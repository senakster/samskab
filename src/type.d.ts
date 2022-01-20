type TUser = {
    [k: string]: any,
    id: number,
    name: string,
    email: string,
    created_at: Date | string,
    updated_at: Date | string,
    _links: T_LINK[],
    _embedded: {
        roles?: TRole[],
        details?: TDetail[],
        groups?: TGroup[],
    }
}
type TRole = {
    id: number,
    name: string,
    resource_id: number,
    resource_type: string,
    permission_level: number,
    created_at: Date,
    updated_at: Date,
    _links: T_LINK[],
}
type TDetail = {
    img?: string | TUDImg,
}
type TUDImg = {
    name: string,
    URL?: string,
    data?: string,
    mime_type: string,
    size: { x: number, y: number },
}
type TGroup = {
    id: string,
    name: string,
    municipality: string,
}

type TGNFGGrouplink = {
    id: number,
    group_id: number,
    name: string,
    url: string,
    description: string,
    created_at: string,
    updated_at: string,
    _links: T_LINK[],
}
type TGNFGData = {
    name: string,
    municipality: string,
    grouptype: 'kommunegruppe' | 'lokalgruppe',
    description: string,
    status: 'active' | 'inactive',
}

type TGNFG = TGNFGData & {
    id: number,
    created_at: string,
    updated_at: string,
    _embedded: { grouplinks: TGNFGGrouplink[] }
    _links: T_LINK[]
}
type T_LINK = {
    rel: 'self' | 'update' | 'delete',
    type: 'GET' | 'PUT' | 'DELETE',
    href: string,
}

const group: TGNFG = {
    id: 1,
    name: K\u00f8benhavn,
    municipality: K\u00f8benhavn,
    grouptype: kommunegruppe, description: '',
    status: active,
    created_at: '',
    updated_at: ',',
    grouplinks: [],
    _links: [],
    _embedded: { grouplinks: [] }
}