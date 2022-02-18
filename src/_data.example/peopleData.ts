export type TPeople = {
    id: string,
    title?: string, 
    role?: string,
    name: string,
    description?: string,
    associations?: string[],
    email?: string,
    phone?: string,
    url?: string,
}

export const people: TPeople[] = [
    {
        id: "ID01",
        title: 'title',
        name: 'firstname lastname',
        role: 'position',
        description: "position",
        associations: ['association'],
        email: 'email@example.com',
        phone: '+45 xxxxxxxx',
        url: 'https://www.example.com'
    }
]

export default people