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
        // url: 'https://antropologi.ku.dk/ansatte/professorer/?pure=da/persons/151879',
        // img: { url: `__PUBLICURL__/media/img/people/Ninna_Frandsen_Thorup_Naboskab.png` },
    },
    {
        id: 'KU02',
        title: 'Professor emeritus',
        role: '',
        name: 'Jens Villiam Hoff',
        description: '',
        affiliations: ['Københavns Universitet', 'Institut for Statskundskab'],
        email: 'jh@ifs.ku.dk',
        phone: '+45 35323386',
        // url: 'https://polsci.ku.dk/',
        // img: { url: `__PUBLICURL__/media/img/people/Ninna_Frandsen_Thorup_Naboskab.png` },
    },
    {
        id: 'KU03',
        title: 'Tenue Track Adjunkt',
        role: '',
        name: 'Simon Westergaard Lex',
        description: '',
        affiliations: ['Københavns Universitet', 'Institut for Antropologi'],
        email: 'simon.lex@anthro.ku.dk',
        phone: '+45 35323458',
        // url: 'https://antropologi.ku.dk/ansatte/adjunkt-og-postdoc/?pure=da/persons/377218',
        // img: { url: `__PUBLICURL__/media/img/people/Ninna_Frandsen_Thorup_Naboskab.png` },
    },
    {
        id: 'KU04',
        title: 'ph.d. studerende',
        role: 'ph.d. studerende',
        name: 'Ida Torp Neergaard',
        description: '',
        affiliations: ['Københavns Universitet', 'Institut for Antropologi'],
        // email: '',
        // phone: '+45 35323458',
        // url: 'https://antropologi.ku.dk/ansatte/adjunkt-og-postdoc/?pure=da/persons/377218',
        // img: { url: `__PUBLICURL__/media/img/people/Ninna_Frandsen_Thorup_Naboskab.png` },
    },
    {
        id: "BB01",
        title: '',
        name: 'Camilla Englyst-Nielsen',
        role: '',
        description: '',
        affiliations: ['Bærebo'],
        email: 'camilla@baerebo.dk',
        phone: '+45 29723145',
        url: 'https://www.baerebo.org/',
        img: { url: `__PUBLICURL__/media/img/people/camilla_baerebo.png` },
    },
    {
        id: "BB02",
        title: '',
        name: 'Marie Chemwemwe Degnbol ',
        role: '',
        description: '',
        affiliations: ['Bærebo'],
        email: 'marie@baerebo.dk',
        phone: '+45 22389875',
        url: 'https://www.baerebo.org/',
        img: { url: `__PUBLICURL__/media/img/people/marie_baerebo.png` },

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
        id: "ON01",
        title: '',
        name: 'Bent Mariager',
        role: '',
        description: '',
        affiliations: ['Omstilling NU'],
        email: 'bent@omstilling.nu',
        phone: '',
        url: 'https://omstilling.nu',
        img: { url: `__PUBLICURL__/media/img/people/Bent_Mariager_Omstilling_Nu.jpg` },
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
        img: { url: `__PUBLICURL__/media/img/people/Bent_Mariager_Omstilling_Nu.jpg` },
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
        role: 'Website',
        description: "Webudvikler",
        affiliations: ['Omstilling NU'],
        email: 'senakster@gmail.com',
        phone: '+45 22853507',
        img: { url: `__PUBLICURL__/media/img/people/Emil_Nakayama_Omstilling_Nu.jpg`}
    }
]

export default people