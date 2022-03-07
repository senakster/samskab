import { TPeople } from '_data/peopleData'
import { TPublication } from './publicationsData'

export type TResult = {
    id: string,
    title: string,
    publication?: TPublication['id'],
    url?: string,
    description?: string,
    cover?: string,
    author?: TPeople[],
    status: 'opfyldt' | 'igangsat' | 'afventer' | 'udskudt',
    display: boolean,
}

export const results: { wp: string, list: TResult[] }[] = [
    {
        wp: 'wp1', list: [
            {
                id: 'wp1-r1',
                title: 'Idekatalog',
                description: 'Best-practice idekatalog, som samler erfaringer fra 10 etablerede og velfungerende grønne nabofællesskaber, bofællesskaber og økosamfund, i samarbejde med Bofaellesskab.dk som driver en vidensbank om emnet.',
                status: 'afventer',
                display: true,
            },
            {
                id: 'wp1-r2',
                title: 'Træningsforløb',
                description: 'Skaber kompetencer og viden hos grønne ildsjæle, så de klædes på til at sætte gang i opbygningen af grønne nabofællesskaber.Dette foretages i samarbejde med DeltagerDanmark og deres Grønne Akademi.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp1-r3',
                title: 'Mentorforløb',
                description: 'Mentorforløb hvor ildsjæle fra eksisterende grønne nabofællesskaber tilknyttes et nyt nabofællesskab for at inspirere, hjælpe og understøtte etableringen.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp1-r4',
                title: 'Adfærdschallenges',
                description: 'Adfærdschallenges om konkrete beboerdrevne aktiviteter som motiverer beboere til grønne forandringer i hverdagen.',
                status: 'afventer',
                display: false,
            },
        ]
    },
    {
        wp: 'wp2', list: [
            {
                id: 'wp2-r1',
                title: 'Evaluering',
                description: 'Evaluering der dokumenterer, hvordan ovenstående redskaber fungerer i praksis med anbefalinger til forbedringer og optimering heraf.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp2-r2',
                title: 'Interviews',
                description: 'Min. 20+ semistrukturerede interview af nøgleaktører.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp2-r3',
                title: 'Fokusgrupper',
                description: 'Min. 3 fokusgrupper med fællesskabs- eller bestyrelsesmedlemmer.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp2-r4',
                title: 'Analyse',
                description: 'Analyse af relevante interne dokumenter, strategier, vedtægter og rapporter.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp2-r5',
                title: 'Kursus eller forløb',
                description: 'For at assistere kommunalt ansatte i udviklingen af deres handlingsplaner for at styrke fællesskab og bæredygtighed.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp2-r6',
                title: 'Kursus eller forløb',
                description: 'For at opbygge kompetencer blandt både ansatte i boligselskaber samt bestyrelsesmedlemmer/ repræsentanter i boligforeninger(både andel, ejer og lejer).',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp2-r7',
                title: 'Idekatalog',
                description: 'Samler erfaringer fra 10 etablerede og fungerende grønne nabofællesskaber. Målrettes til ansatte i kommuner og boligselskaber.',
                status: 'afventer',
                display: true,
            },
        ]
    },
    {
        wp: 'wp3', list: [
            {
                id: 'wp3-r1',
                title: 'Semistrukturerede interviews',
                description: '30+ semistrukturerede interview af nøgleaktører og deltagere.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp3-r2',
                title: 'fokusgruppediskussioner',
                description: '3+ fokusgruppediskussioner med udvalgte grupper af medlemme',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp3-r3',
                title: 'CO2-beregner',
                description: 'Udviklet CO2-beregner til nabofællesskaber og boligaktører.',
                status: 'igangsat',
                display: true,
            }, {
                id: 'wp3-r4',
                title: 'Spørgeskema',
                description: 'Spørgeskema om CO2-aftryk med randomiseret stikprøve af 1000+ danskere.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp3-r5',
                title: 'Spørgeundersøgelse',
                description: 'Spørgeundersøgelse om CO2-aftryk hos deltagere i grønne nabofællesskaber.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp3-r6',
                title: 'Analyserapport',
                description: 'Analyserapport af grønne nabofællesskabers miljø- og sociale påvirkning',
                status: 'afventer',
                display: true,
            }
        ]
    },
    {
        wp: 'wp4', list: [
            {
                id: 'wp4-r1',
                title: 'Redskaber',
                description: 'fx træningskurser, er udbudt via samarbejdspartnere til relevante ansatte.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp4-r2',
                title: 'Følge af udvikling',
                description: 'Følge udviklingen i omkring 100 grønne nabofællesskaber.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp4-r3',
                title: 'Spørgeundersøgelse',
                description: 'Institutionel spørgeundersøgelse om organisering af grønne nabofællesskaber.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp4-r4',
                title: 'Interviews',
                description: '20+ interviews med nøgleaktører i udvalgte nye grønne nabofællesskaber.',
                status: 'afventer',
                display: false,
            }, {
                id: 'wp4-r5',
                title: 'Rapport',
                description: 'Rapport om opskalering af grønne nabofællesskaber på landsplan samt anbefalinger',
                status: 'afventer',
                display: true,
            }
        ]
    },
    {
        wp: 'wp5', list: [
            {
                id: 'wp5-r1',
                title: 'Projektmøder',
                description: '10 projektmøder om året, hvor kernepartnere udveksler forskningsresultater.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp5-r2',
                title: 'Solution Labs',
                description: '8 solution labs, hvor forskernes resultater præsenteres for samarbejdspartnere og andre interessenter.Alle samarbejdspartnere inddrages til alle solution labs.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp5-r3',
                title: 'Videnskabelige artikler',
                description: 'Publicering af min. 6 videnskabelige artikler i internationale tidsskrifter.',
                status: 'afventer',
                display: true,
            },
            {
                id: 'wp5-r4',
                title: 'Konferencedeltagelse',
                description: 'Deltagelse i min. 3 internationale konferencer.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp5-r5',
                title: 'Internationalt seminar',
                description: 'Afholdelse af 1 internationalt seminar om den kollektive del af miljøadfærd.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp5-r6',
                title: 'Ph.D. afhandling',
                description: 'Ph.D. afhandling - Københavns Universitet.',
                status: 'afventer',
                display: true,
            },
            {
                id: 'wp5-r7',
                title: 'Løbende formidling',
                description: 'Publicering og løbende formidling af idekataloger, vejledningsmanualer, træningsforløb, kurser, webinarer og rapporter produceret i WP 1-4.',
                status: 'afventer',
                display: false,
            },
            {
                id: 'wp5-r8',
                title: 'Hjemmeside',
                description: 'Hjemmeside med alle kataloger, manualer og rapporter udgivet i projektet.',
                status: 'igangsat',
                display: false,
            },
            {
                id: 'wp5-r9',
                title: 'Kronikker',
                description: 'Min. 4 kronikker i dagblade.',
                status: 'afventer',
                display: true,
            },
            {
                id: 'wp5-r10',
                title: 'Podcastserie',
                description: 'Podcastserien ‘fra Grå til Grøn’ (4 afsnit).',
                status: 'afventer',
                display: true,
            },
            {
                id: 'wp5-r11',
                title: 'Artikler',
                description: 'Artikler i interessepartneres mediekanaler (medlemsbreve, nyhedsbreve etc.).',
                status: 'afventer',
                display: true,
            },
            {
                id: 'wp5-r12',
                title: 'Møder',
                description: 'Møder med det rådgivende panel (minimum to møder om året).',
                status: 'afventer',
                display: false,
            }
        ]
    }
]

export default results