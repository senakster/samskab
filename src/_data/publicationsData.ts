import {people, TPeople} from '_data/peopleData'

export type TPublication = {
    id: string,
    title: string,
    name: string;
    published?: {year: number, month?: number},
    url: string,
    summary: string,
    cover: string,
    author?: (TPeople | string)[], 
}
export const publications = [
    {
        id: 'pw0-1',
        title: 'Projektbeskrivelse',
        name: 'Projekt 40322: SAMSKAB - FRA GRÅ BOLIGFORENINGER TIL GRØNNE NABOFÆLLESSKABER',
        published: {year: 2021},
        url: `__PUBLICURL__/media/files/projektbeskrivelse.pdf`,
        summary: 'Projektet udfordrer forestillingen om, at den grønne omstilling primært foregår gennem individuel adfærd og teknologisk omstilling ved at påpege, at den i lige så høj grad kan finde sted som en grundlæggende social omstilling, der involverer nabofællesskaber. Projektet bidrager med viden og redskaber, der kan støtte etableringen af helt nye grønne nabofællesskaber samt overgangen fra grå boligforeninger til grønne nabofællesskaber og dermed styrke den grønne omstilling. Grå boligforeninger betegnes her som boligforeninger, der ikke har et direkte fokus på miljø, klima og bæredygtighed, mens grønne nabofællesskaber defineres som grønne, hvor deres medlemmer deler ønsket om at leve mere bæredygtigt og handler i fællesskab på dette ønske.',
        cover: `__PUBLICURL__/media/img/projektbeskrivelse-cover.png`,
        // author: [people.find(p => p.id === 'web1')]
    },  
    {
        id: 'pw0-2',
        title: 'Klimahandling i fællesskab',
        name: 'Klimahandling i fællesskab',
        published: { year: 2021 },
        url: `__PUBLICURL__/media/files/Klimahandling i Fællesskab.pdf`,
        summary: 'I dette handlekatalog har vi samlet en række projektforslag til, hvordan I kan være med til at gøre jeres boligforening, landsbyfællesskab, gade eller lokalsamfund grønnere i fællesskab med andre. Handlekataloget henvender sig til alle, som ønsker at tage initiativ til og drømmer om at komme i gang med et eller flere meningsfulde klimaprojekter.',
        cover: `__PUBLICURL__/media/img/klimahandling-cover.png`,
        author: ['Concito','DeltagerDanmark']
    },
]
export default publications