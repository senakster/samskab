import { people, TPeople } from '_data/peopleData'
import { TPublication } from './publicationsData'

export type TResult = {
    id: string,
    title: string,
    publication?: TPublication['id'],
    url?: string,
    description?: string,
    cover?: string,
    author?: TPeople[],
    status: 'opfyldt' | 'igangsat' | 'afventer' | 'udskudt'
}
export const results: {wp: string, list: TResult[]}[] = [
    {
        wp: 'wp1', list: [
            // {
            //     id: 'wp-t1',
            //     title: 'test',
            //     description: 'teststse',
            //     publication: 'pw0-1',
            //     url: 'google.dk',
            //     cover: 'https://omstilmig.nu/GNF/assets/ON-logo.svg',
            //     author: [people.find(p => p.id === 'web1')!],
            //     status: 'opfyldt',
            // },
            // {
            //     id: 'wp-t2',
            //     title: 'test',
            //     description: 'teststse',
            //     publication: 'pw0-1',
            //     url: 'google.dk',
            //     cover: 'https://omstilmig.nu/GNF/assets/ON-logo.svg',
            //     author: [people.find(p => p.id === 'web1')!],
            //     status: 'igangsat',
            // },
            // {
            //     id: 'wp-t3',
            //     title: 'test',
            //     description: 'teststse',
            //     publication: 'pw0-1',
            //     url: 'google.dk',
            //     cover: 'https://omstilmig.nu/GNF/assets/ON-logo.svg',
            //     author: [people.find(p => p.id === 'web1')!],
            //     status: 'afventer',
            // },
            // {
            //     id: 'wp-t4',
            //     title: 'test',
            //     description: 'teststse',
            //     publication: 'pw0-1',
            //     url: 'google.dk',
            //     cover: 'https://omstilmig.nu/GNF/assets/ON-logo.svg',
            //     author: [people.find(p => p.id === 'web1')!],
            //     status: 'udskudt',
            // },
            {
                id: 'wp1-r1',
                title: 'Idekatalog',
                description: 'Best-practice idekatalog, som samler erfaringer fra 10 etablerede og velfungerende gr??nne nabof??llesskaber, bof??llesskaber og ??kosamfund, i samarbejde med Bofaellesskab.dk som driver en vidensbank om emnet.',
                status: 'afventer',
            },
            {
                id: 'wp1-r2',
                title: 'Tr??ningsforl??b',
                description: 'Skaber kompetencer og viden hos gr??nne ildsj??le, s?? de kl??des p?? til at s??tte gang i opbygningen af gr??nne nabof??llesskaber.Dette foretages i samarbejde med DeltagerDanmark og deres Gr??nne Akademi.',
                status: 'afventer',
            }, {
                id: 'wp1-r3',
                title: 'Mentorforl??b',
                description: 'Mentorforl??b hvor ildsj??le fra eksisterende gr??nne nabof??llesskaber tilknyttes et nyt nabof??llesskab for at inspirere, hj??lpe og underst??tte etableringen.', 
                status: 'afventer',            
            }, {
                id: 'wp1-r4',
                title: 'Adf??rdschallenges',
                description: 'Adf??rdschallenges om konkrete beboerdrevne aktiviteter som motiverer beboere til gr??nne forandringer i hverdagen.',
                status: 'afventer',
            },
        ]
    },
    {
        wp: 'wp2', list: [
            {
                id: 'wp2-r1',
                title: 'Evaluering',
                description: 'Evaluering der dokumenterer, hvordan ovenst??ende redskaber fungerer i praksis med anbefalinger til forbedringer og optimering heraf.',
                status: 'afventer',
            },
            {
                id: 'wp2-r2',
                title: 'Interviews',
                description: 'Min. 20+ semistrukturerede interview af n??gleakt??rer.',
            status: 'afventer',
            },
            {
                id: 'wp2-r3',
                title: 'Fokusgrupper',
                description: 'Min. 3 fokusgrupper med f??llesskabs- eller bestyrelsesmedlemmer.',
            status: 'afventer',
            },
            {
                id: 'wp2-r4',
                title: 'Analyse',
                description: 'Analyse af relevante interne dokumenter, strategier, vedt??gter og rapporter.', 
                status: 'afventer',            },
            {
                id: 'wp2-r5',
                title: 'Kursus eller forl??b',
                description: 'For at assistere kommunalt ansatte i udviklingen af deres handlingsplaner for at styrke f??llesskab og b??redygtighed.',
                status: 'afventer',
            },
            {
                id: 'wp2-r6',
                title: 'Kursus eller forl??b',
                description: 'For at opbygge kompetencer blandt b??de ansatte i boligselskaber samt bestyrelsesmedlemmer/ repr??sentanter i boligforeninger(b??de andel, ejer og lejer).',
                status: 'afventer',
            },
            {
                id: 'wp2-r7',
                title: 'Idekatalog',
                description: 'Samler erfaringer fra 10 etablerede og fungerende gr??nne nabof??llesskaber.M??lrettes til ansatte i kommuner og boligselskaber.',
                status: 'afventer',
            },
        ]
    },
    {
        wp: 'wp3', list: [
            {
                id: 'wp3-r1',
                title: 'Semistrukturerede interviews',
                description: '30+ semistrukturerede interview af n??gleakt??rer og deltagere.',
                status: 'afventer',
            }, {
                id: 'wp3-r2',
                title: 'fokusgruppediskussioner',
                description: '3+ fokusgruppediskussioner med udvalgte grupper af medlemme',
                status: 'afventer',
            }, {
                id: 'wp3-r3',
                title: 'CO2-beregner',
                description: 'Udviklet CO2-beregner til nabof??llesskaber og boligakt??rer.',
                status: 'igangsat'
            }, {
                id: 'wp3-r4',
                title: 'Sp??rgeskema',
                description: 'Sp??rgeskema om CO2-aftryk med randomiseret stikpr??ve af 1000+ danskere.',
                status: 'afventer',
            }, {
                id: 'wp3-r5',
                title: 'Sp??rgeunders??gelse',
                description: 'Sp??rgeunders??gelse om CO2-aftryk hos deltagere i gr??nne nabof??llesskaber.',
                status: 'afventer',
            }, {
                id: 'wp3-r6',
                title: 'Analyserapport',
                description: 'Analyserapport af gr??nne nabof??llesskabers milj??- og sociale p??virkning',
                status: 'afventer',
            }
        ]
    },
    {
        wp: 'wp4', list: [
            {
                id: 'wp4-r1',
                title: 'Redskaber',
                description: 'fx tr??ningskurser, er udbudt via samarbejdspartnere til relevante ansatte.',
                status: 'afventer'
            }, {
                id: 'wp4-r2',
                title: 'F??lge af udvikling',
                description: 'F??lge udviklingen i omkring 100 gr??nne nabof??llesskaber.',
                status: 'afventer',
            }, {
                id: 'wp4-r3',
                title: 'Sp??rgeunders??gelse',
                description: 'Institutionel sp??rgeunders??gelse om organisering af gr??nne nabof??llesskaber.',
                status: 'afventer',
            }, {
                id: 'wp4-r4',
                title: 'Interviews',
                description: '20+ interviews med n??gleakt??rer i udvalgte nye gr??nne nabof??llesskaber.',
                status: 'afventer',
            }, {
                id: 'wp4-r5',
                title: 'Rapport',
                description: 'Rapport om opskalering af gr??nne nabof??llesskaber p?? landsplan samt anbefalinger',
                status: 'afventer',
            }
        ]
    },
    {
        wp: 'wp5', list: [
            {
                id: 'wp5-r1',
                title: 'Projektm??der',
                description: '10 projektm??der om ??ret, hvor kernepartnere udveksler forskningsresultater.',
                status: 'afventer',
            },
            {
                id: 'wp5-r2',
                title: 'Solution Labs',
                description: '8 solution labs, hvor forskernes resultater pr??senteres for samarbejdspartnere og andre interessenter.Alle samarbejdspartnere inddrages til alle solution labs.',
            status: 'afventer',
            },
            {
                id: 'wp5-r3',
                title: 'Videnskabelige artikler',
                description: 'Publicering af min. 6 videnskabelige artikler i internationale tidsskrifter.',
            status: 'afventer',
            },
            {
                id: 'wp5-r4',
                title: 'Konferencedeltagelse',
                description: 'Deltagelse i min. 3 internationale konferencer.',
                status: 'afventer',
            },
            {
                id: 'wp5-r5',
                title: 'Internationalt seminar',
                description: 'Afholdelse af 1 internationalt seminar om den kollektive del af milj??adf??rd.', 
                status: 'afventer',
            },
            {
                id: 'wp5-r6',
                title: 'Ph.D. afhandling',
                description: 'Ph.D. afhandling - K??benhavns Universitet.', 
                status: 'afventer',
            },
            {
                id: 'wp5-r7',
                title: 'L??bende formidling',
                description: 'Publicering og l??bende formidling af idekataloger, vejledningsmanualer, tr??ningsforl??b, kurser, webinarer og rapporter produceret i WP 1-4.', 
                status: 'afventer',
            },
            {
                id: 'wp5-r8',
                title: 'Hjemmeside',
                description: 'Hjemmeside med alle kataloger, manualer og rapporter udgivet i projektet.', 
                status: 'igangsat',
            },
            {
                id: 'wp5-r9',
                title: 'Kronikker',
                description: 'Min. 4 kronikker i dagblade.', 
                status: 'afventer',
            },
            {
                id: 'wp5-r10',
                title: 'Podcastserie',
                description: 'Podcastserien ???fra Gr?? til Gr??n??? (4 afsnit).', 
                status: 'afventer',
            },
            {
                id: 'wp5-r11',
                title: 'Artikler',
                description: 'Artikler i interessepartneres mediekanaler (medlemsbreve, nyhedsbreve etc.).', 
                status: 'afventer',
            },
            {
                id: 'wp5-r12',
                title: 'M??der',
                description: 'M??der med det r??dgivende panel (minimum to m??der om ??ret).', 
                status: 'afventer',
            }
        ]
    }



]
export default results