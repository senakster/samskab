import {people, TPeople} from '_data/peopleData'

export type TPublication = {
    id: string,
    title: string,
    subtitle?: string,
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
        author: ['Concito', 'DeltagerDanmark']
    },
    {
        id: 'pw0-3',
        title: 'Vejen til grønne nabofællesskaber i parcelhuskvarterer',
        subtitle: 'Et casestudie af Kalenderkvarteret i Køge Kommune',
        name: 'Klimahandling i fællesskab',
        published: { year: 2022 },
        url: `__PUBLICURL__/media/files/Speciale_Vejen_til_gronne_nabofallesskaber1.pdf`,
        summary: 'The classical single-family house, a form of dwelling associated with peace, room and privacy, is one of the most popular types of housing in Denmark. But in light of the climate crisis this type of housing can be problematized, as it equals a large ecological footprint for its residents. As former research has shown that green neighboring communities can help lower emissions, this project seeks, through a critical realist approach, to examine the following: How can green neighboring communities be established among the residents of the detached house neighborhood Kalenderkvarteret, and how can the transformation be supported by the Køge Municipality? The specific neighborhood is chosen as a critical case, and empirically the study is based on a questionnaire and six in-depth interviews with residents of the neighborhood, and an expert interview with a frontline planner from Køge Municipality. The theoretical framework is practice- and everyday life theory (Halkier & Jensen 2008; Bech-Jørgensen 1994), theory on neighbor-relations (Rosenblum 2016), pracitivism and participation (Hansen 2019), critique of the modern planning era (Gehl 1971), and the public frontline planner (Agger & Sørensen 2018). It is concluded that in spite of barriers, several paths can lead to the establishment of green neighboring communities in the neighborhood: (1) A bottom-up organization of the residents driven by a networker, focused on changing the norm of the everyday life and neighbor relations in the neighborhood, (2) municipality-led interorganizational long-term work with community building initiatives focused on existing neighborhoods and/or (3) extended collaboration between a frontline planner and social-green organizations, targeted on supporting the organization of the residents and the realization of their initiatives.',
        cover: `__PUBLICURL__/media/img/Speciale_Vejen_til_gronne_nabofallesskaber_front-001.png`,
        author: ['Ida Adamsen', 'Ida Amalie Nordborg Nielsen', 'Signe Filtenborg']
    },
]
export default publications