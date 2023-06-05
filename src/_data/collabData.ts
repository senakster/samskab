import images from '_media/img/images'

export type TCollabor = {
    id: string,
    name: string,
    logo?: { id: string, url: string },
    color?: string,
    href: string,
    description: string,
}
const key_partners: TCollabor[] = [
    {
        id: 'ku',
        name: 'Københavns Universitet',
        logo: images.find(i => i.id === 'ku_logo'),
        color: "#901a1e",
        href: "https://www.ku.dk/",
        description: "Københavns Universitet (KU) leverer forskning i verdensklasse om miljøadfærd og miljø governance. Forskerne står bl.a. bag  Compass forskningsprojektet og er eksperter i politiske og sociale aspekter af den grønne omstilling. En Ph.d. studerende tilknyttes projektet."
    },
    {
        id: 'bb', name: 'Bærebo', logo: images.find(i => i.id === 'bb_logo'), color: "#9ebc99", href: "https://www.baerebo.org/",
        description: "Bærebo er eksperter i oprettelsen af nye bæredygtige bofællesskaber, der kan ‘mainstreame’ økosamfundsbevægelsen. Arbejder tæt sammen med Landsforeningen for Økosamfund og Foreningen Bofællesskab.dk, bl.a. med at etablere en ‘startpakke’ til nye bofællesskaber.",
    },
    {
        id: 'nb', name: 'Behave Green', logo: images.find(i => i.id === 'nb_logo'), color: "#1a4443", href: "https://behavegreen.dk/",
        description: "Behave Green er eksperter i at forstå fællesskaber, kollektiv handling og adfærd i krydsfeltet mellem grøn omstilling og levede liv. Er involveret i mange projekter og trækker på en praktisk erfaring med viden og værktøjer, der kan skabe grøn og social omstilling i boligområder.",
    },
    {
        id: 'on', name: 'Omstilling NU', logo: images.find(i => i.id === 'on_logo'), color: "#a8c350", href: "https://omstilling.nu",
        description: "Omstilling NU er en organisation, der arbejder på at skabe en bæredygtig omstilling af samfundet. De driver netværket Grønne Nabofællesskaber, som har spredt sig i 2020-21 til 59 grupper med 2300+ medlemmer i 44 kommuner.",
    },
]
const funding: TCollabor[] = [
    {
        id: 'velux', name: 'Veluxfonden', logo: images.find(i => i.id === 'velux_logo'), color: "#0073a9", href: "https://veluxfoundations.dk",
        description: "VELUX FONDEN er en almennyttig fond, der støtter aktive ældre, øjen- og aldringsforskning samt humanvidenskabelige, kulturelle, sociale og miljømæssige formål for at fremme det danske demokratiske samfund på et oplyst, inkluderende og bæredygtigt grundlag. I 2020 uddelte VELUX FONDEN 314 millioner kr. VELUX FONDEN er stiftet i 1981 af civilingeniør Villum Kann Rasmussen - grundlægger af bl.a. VELUX A/S og andre firmaer i VKR Gruppen, der har til formål at bringe dagslys, frisk luft og et bedre miljø ind i menneskers hverdag.",
    },
]

const forskningssamarbejdspartnere: TCollabor[] = [
    {
        id: 'aau', name: 'Aalborg Universitet', logo: images.find(i => i.id === 'aau_logo'), color: "#211a52", href: "https://www.aau.dk/",
        description: "Aalborg Universitet har som mål, at det omgivende samfund som helhed skal drage nytte af den viden, som AAU’s forskere og studerende skaber. For at nå dette mål satser AAU på forskellige typer af samarbejde med både små, mellemstore og store virksomheder, offentlige institutioner, uddannelsesinstitutioner og iværksættere.",
    },
    {
        id: 'build', name: 'BUILD - INSTITUT FOR BYGGERI, BY OG MILJØ - AAU', logo: images.find(i => i.id === 'aau_logo'), color: "#2f323b", href: "https://www.build.aau.dk/",
        description: "BUILD - Institut for Byggeri, By og Miljø har sit udgangspunkt i ingeniørvidenskaben, men indeholder også vigtige og omfattende elementer fra samfundsvidenskab og humaniora. Dette giver os mulighed for at forske, rådgive og uddanne helhedsorienteret i by-, bolig- og anlægsområdets komplekse problemstillinger.",
    },
    {
        id: 'concito', name: 'Concito', logo: { id: 'concito_logo', url: 'https://concito.dk/sites/concito.dk/files/concito_logo.png' }, color: "#75a936", href: "https://concito.dk/",
        description: "CONCITO ønsker at bygge bro mellem klimaløsningerne i Danmark og den globale grønne omstilling, både ved at bringe danske og nordiske løsninger ud internationalt og ved at bringe vigtig global viden ind i en dansk kontekst. Derfor engagerer CONCITO sig også i internationale partnerskaber og netværk, herunder bl.a. med World Ressource Institute og nordiske tænketanke",
    },
    {
        id: 'susy', name: 'Centre for Sustainability and Society (SUSY) - KU', logo: images.find(i => i.id === 'ku_logo'), color: "#901a1e", href: "https://susy.ku.dk/",
        description: "Centre for Sustainability and Society (SUSY) har fokus på forskning og uddannelse i klima og bæredygtighed.",
    },
    {
        id: 'scc', name: 'Sustainability Science Centre - KU', logo: images.find(i => i.id === 'ku_logo'), color: "#901a1e", href: "https://sustainability.ku.dk/",
        description: "Formålet med Sustainability Science Center er at katalysere, facilitere og koordinere forsknings- og uddannelsesinitiativer på Københavns Universitet med henblik på at adressere problemstillinger, der er relevante for en bæredygtig samfundsudvikling.",
    },
]

const praksissamarbejdspartnere = {
    kommuner: [
        { name: 'København', description: 'Partner i projektet pga. Tingbjerg', url:'https://kk.dk/'},
        { name: 'Lejre', description: 'Partner i projektet pga. Hvalsø', url: 'https://lejre.dk/'},
        { name: 'Frederikssund', description: 'Partner i projektet pga. Vinge-projektet', url: 'https://frederikssund.dk/' },
        { name: 'Køge', description: 'Deltager med at udbrede grønne nabofællesskaber', url: 'https://koege.dk/' },
        { name: 'Roskilde', description: 'Deltager med at udbrede grønne nabofællesskaber', url: 'https://roskilde.dk/' },
    ],
    boligorganisationer: [
        { name: 'KAB', description: 'Administrerer 60.000 almene boliger i Danmark.', url: 'https://www.kab-bolig.dk/om-kab' },
        { name: 'ABF.dk', description: 'Repræsenterer 5000+ andelsboligforeninger i Danmark.', url: 'https://www.abf-rep.dk/' },
        { name: 'BOSJ.dk', description: 'Boligselskab, som servicerer 12.500 boliger på Sjælland.', url: 'https://bosj.dk/' },
        { name: 'Grundejeren.dk', description: 'Repræsenterer 90 grundejerforeninger i København.', url: 'https://www.grundejeren.dk/' },
    ],
    andre: [
        { name: 'DeltagerDanmark.dk', description: 'Skal skabe en større national bevægelse og engagere 100.000 danskere omkring den grønne omstilling i regi af 70i30 projektet.', url: 'https://deltagerdanmark.dk/' },
        { name: 'Bofaellesskab.dk', description: 'Paraplyorganisation for ca. 800 bofællesskaber i Danmark.Samarbejdspartner i WP1 om identificering af best practice.', url: 'https://bofaellesskab.dk/' },
        { name: 'Landsforeningen for Økosamfund', description: 'Paraplyorganisation for 38 økosamfund i Danmark.Samarbejdspartner i WP1 om identificering af best practice.', url: 'https://okosamfund.dk/' },
        { name: 'CFBU', description: 'Samarbejdspartner i WP3 om ‘social impact’ i udsatte boligområder.', url: 'http://cfbu.dk/' },
        { name: 'Rådet for Grøn Omstilling', description: 'Samarbejdspartner i WP4 og WP5.', url: 'https://rgo.dk/' }
    ]
}

const rådgivendepanel = [
    { name: 'Tom Henfrey', description: 'Research coordinator i ECOLISE.', url: 'https://www.ecolise.eu/our-team/' },
    { name: 'Helen Jarvis', description: 'Professor i Newcastle University.', url: 'https://www.ncl.ac.uk/gps/staff/profile/helenjarvis.html' },
    { name: 'Anna Pedersen', description: 'Organisationskonsulent i ABF.', url: 'https://www.linkedin.com/in/anna-pedersen-b%C3%A6kh%C3%B8j-33661443/' },
    { name: 'Mikkel Warming', description: 'Udviklingschef i KAB.', url: 'https://www.3b.dk/nyheder/2020/mikkel-warming-er-ny-udviklingschef-i-3b' },
    { name: 'Jacob Skjødt Nielsen', description: 'Grøn ambassadør hos Køge Kommune.', url: 'https://www.linkedin.com/in/jacob-skj%C3%B8dt-nielsen-833345/' },
    { name: 'Rudy Madsen', description: 'Sekretariatsleder Bofællesskab.dk.', url: 'https://bofaellesskab.dk/kontakt/konsulenterne/item/1-test-copy-copy-2' },

]
// { name: ' ', description: '' }

export const collaborators = {
    key_partners,
    funding,
    forskningssamarbejdspartnere,
    praksissamarbejdspartnere,
    rådgivendepanel,
}

export default collaborators

