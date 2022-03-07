export type TPeople = {
    id: string,
    title?: string, 
    role?: string,
    name: string,
    description?: string,
    affiliations?: string[],
    email?: string,
    phone?: string,
    url?: string,
    img?: {url?:string},
}

export const people: TPeople[] = [
    {
        id: 'KU01',
        title: 'Lektor',
        role: 'projektleder',
        name: 'Quentin Gausset',
        description: '',
        affiliations: ['Københavns Universitet', 'Institut for Antropologi'],
        email: 'quentin.gausset@anthro.ku.dk',
        phone: '+45 51288550',
        url: 'https://antropologi.ku.dk/ansatte/professorer/?pure=da/persons/151879',
        // img: { url: `__PUBLICURL__/media/img/people/Ninna_Frandsen_Thorup_Naboskab.png` },
    },
    {
        id: "ON01",
        title: '',
        name: 'Bent Mariager',
        role: '',
        description: '',
        affiliations: ['Omstilling NU'],
        email: 'bent@omstilling.nu',
        phone: '',
        url: 'https://omstilling.nu',
        img: { url: `__PUBLICURL__/media/img/people/Bent_Mariager_Omstilling_Nu.jpg`},
    },
    {
        id: "ON02",
        title: '',
        name: 'Bolette Friborg Pedersen',
        role: '',
        description: '',
        affiliations: ['Omstilling NU'],
        email: 'bolette@omstilling.nu',
        phone: '',
        url: 'https://omstilling.nu',
        // img: { url: '' }
    },
    {
        id: "NB01",
        title: '',
        name: 'Ninna Frandsen Thorup',
        role: '',
        description: 'Antropolog',
        affiliations: ['Naboskab'],
        email: 'nt@naboskab.dk',
        phone: '+45 28935420',
        url: 'https://naboskab.dk/',
        img: { url: `__PUBLICURL__/media/img/people/Ninna_Frandsen_Thorup_Naboskab.jpg` },
    }, 
    {
        id: "NB02",
        title: '',
        name: 'Kristoffer Ravnbøl',
        role: '',
        description: 'Antropolog',
        affiliations: ['Naboskab'],
        email: 'kr@naboskab.dk',
        phone: '+45 28117596',
        url: 'https://naboskab.dk/',
        img: { url: `__PUBLICURL__/media/img/people/Kristoffer_Ravnboel_Naboskab.jpg` },
    },
    {
        id: "WEB01",
        title: 'webudvikler',
        name: 'Emil Nakayama',
        role: 'hjemmeside',
        description: "Webudvikler",
        affiliations: ['Omstilling NU'],
        email: 'senakster@gmail.com',
        phone: '+45 22853507',
        img: { url: `__PUBLICURL__/media/img/people/Emil_Nakayama_Omstilling_Nu.jpg`}
    }
]

export default people