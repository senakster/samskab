import {TResult} from './resultsData'
export type TPhase = {
    id: string,
    name: string,
    description: string,
    period: number[],
}
export type TWorkPackage = {
    id: string,
    name: string,
    phases: TPhase['id'][],
    description: string[],
    // resultsDescription: string,
    // resultsList: TResult['id'][] //resultsData.id[] one-to-many
}

export const phases: TPhase[] = [
    {
        id: 'A',
        name: 'FASE A',
        description: 'Udvikling og design af redskaber',
        period: [2022]
    },
    {
        id: 'B',
        name: 'FASE B',
        description: 'Afprøvning og justering af redskaber',
        period: [2023,2024]
    },
    {
        id: 'C',
        name: 'FASE C',
        description: 'Opskalering af redskaber',
        period: [2025]

    }
]
export const workPackages: TWorkPackage[] = [
    {
        id: "wp1",
        name: 'Work Package 1 - Motivation og levedygtighed',
        phases: ['A','B'],
        description: [
            'Praksismålet er at udvikle redskaber målrettet beboere og ildsjæle (bottom-up) til at assistere dels etableringen af nye grønne nabofællesskaber samt transformationen af eksisterende grå boligforeninger. Forskningsmålet er at studere de faktorer, som motiverer eller blokerer processen, samt forstå, hvad der fungerer og hvorfor i både skabelsen, transformation og vedligeholdelsen af grønne nabofællesskaber.',
            'I fase A vil denne WP skabe ny viden om, hvordan grønne nabofællesskaber skabes, hvad der fungerer i de fællesskaber, der er skabt og hvordan de forbliver levedygtige. Den vil fokusere på motivation, levedygtighed og de sociale processer og barrierer, der er forbundet med at skabe og opretholde grønne nabofællesskaber. Projektets tilknyttede Ph.d. studerende fokuserer primært på kernecasen i Tingbjerg, som forventes at være den mest udfordrende.'],
    },
    {
        id: "wp2",
        name: 'Work Package 2 - Organisatoriske barrierer',
        phases: ['A', 'B'],
        description: [
            'Praksismålet er at udvikle og afprøve målrettede redskaber, som skal assistere særligt ansatte i kommuner og boligorganisationer i at styrke etablering, transformation og vedligeholdelse af grønne nabofællesskaber.',
            'Forskningsmålet er at studere de organisatoriske barrierer i etableringen af grønne nabofællesskaber samt synergien mellem nabofællesskaber, kommuner og boligorganisationer.'
        ],
    },
    {
        id: "wp3",
        name: 'Work Package 3 - Miljø og social impact',
        phases: ['B'],
        description: [
            'Målet er at dokumentere afsmitningseffekten i lokalområdet på både miljø(klimaaftryk) og det sociale felt(ensomhed, tryghed, integration).',
            'Metode & udførsel: Evalueringen af miljø og social impact studeres i de 3 kernecases i boligområderne Tingbjerg, Vinge og Hvalsø med deltagerobservation i hverdagsinteraktioner og organisatoriske møder. Herudover gennemføres semistrukturerede interview og fokusgruppediskussioner med nøgleaktører og deltagerne i nabofællesskaberne. Der vil også blive inddraget andre relevante pilotprojekter (sekundære cases), der studeres gennem kortvarige feltbesøg og semi-strukturerede interviews med nøgleaktører.',
            'Der udvikles en CO2-beregner, som kan motivere både individuel og fælles reduktion af forbrug [40]. SAMSKAB vil anvende CO2-måleren som udviklet i COMPASS, men med nye tal fra AAU i regi af 70i30. Det vil muliggøre udregning af et gennemsnitligt fodaftryk i de grønne nabofællesskaber.'
        ],
    },
    {
        id: "wp4",
        name: 'Work Package 4 - Opskalering',
        phases: ['C'],
        description: [
            'WP4 følger skabelsen af omkring 100 grønne nabofællesskaber - både nyetablerede og transformerede - gennem SAMSKABs partnere (kommuner og boligorganisationer) samt DeltagerDanmark i 70i30. Målet er at forstå, hvordan opskalering af grønne nabofællesskaber foregår og kan styrkes.',
            'De udviklede og afprøvede redskaber i fase A og B bliver efter 3 år udbredt i kommuner og hos boligaktører. En institutionel spørgeundersøgelse målrettet repræsentanter fra grønne nabofællesskaber fokuserer på grønne nabofællesskabers inspirationskilder, aktiviteter, organisation, levedygtighed, samspil med kommuner og boligselskaber, for at afdække de vilkår, som ligger til grund for deres spredning, succes og opskalering. Derudover foretages semi-strukturerede interviews med nøgleaktører i udvalgte nye grønne nabofællesskaber. Studiet koordineres løbende med det arbejde, som DeltagerDanmark skaber i 70i30 projektet, hvor de skal engagere 100.000 danskere omkring den grønne omstilling.'
        ],
    },
    {
        id: "wp5",
        name: 'Work Package 5 - Formidling og kommunikation',
        phases: ['A','B','C'],
        description: ['Formålet er at sikre organiseringen af forsknings- og formidlingsaktiviteter, publicering af resultater samt løbende formidling til samarbejdspartnere og grønne fællesskaber.'],
    }
]

export default workPackages