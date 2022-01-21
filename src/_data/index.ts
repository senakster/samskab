export type TPeople = {
    id: string,
    name: string,
    description: string,
    association: string,
    email: string,
    phone: string,
}
export const people: TPeople[] = [
    {
        id: "web1",
        name: "Emil Nakayama",
        description: "Webudvikler",
        association: "Omstilling NU",
        email: "senakster@gmail.com",
        phone: "+45 22853507"
    }
]





const data = {
    people
}

export default data