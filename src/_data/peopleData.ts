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
        id: 'KU01',
        title: 'Lektor',
        role: 'projektleder',
        name: 'Quentin Gausset',
        description: '',
        associations: ['KU', 'Institut for Antropologi'],
        email: 'quentin.gausset@anthro.ku.dk',
        phone: '+45 51288550',
        url: 'https://antropologi.ku.dk/ansatte/professorer/?pure=da/persons/151879'
    },
    {
        id: "WEB01",
        title: 'Webudvikler',
        name: 'Emil Nakayama',
        role: 'Webudvikler',
        description: "Webudvikler",
        associations: ['Omstilling NU'],
        email: 'senakster@gmail.com',
        phone: '+45 22853507',
        url: 'https://omstilmig.nu/playground'
    }
]

export default people