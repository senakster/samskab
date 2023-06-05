import Infobox from 'components/ui/Infobox/Infobox';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import publications from '_data/publicationsData';
import logos from '_media/img/logo';
const Home: React.FC = () => {
  const { t } = useTranslation('home');
  return (
    <div className={styles.Home} data-testid="Home">
      <h1 className="page_title">
        {/* <img
          alt="main logo"
          src={logos.logo1HvidKvadrat.url}
          className={`inline-hImg`}
        /> */}
        <Trans ns="home" i18nKey="title">
          Samskab
        </Trans>
        {/* <img
          alt="main logo"
          src={logos.logo1HvidKvadrat.url}
          className={`inline-hImg`}
        /> */}
      </h1>
      <div className={`${styles.flex_container} flex_container`}>
        <div className={`${styles.flex_child70} flex_child70`}>
          <h1>
            <Trans ns={`home`} i18nKey={`title`}>
              Fra grå boligforeninger til grøne nabofællesskaber
            </Trans>
          </h1>
          <p>
            <Trans ns={`home`} i18nKey={`subheader`}>
              Med støtte fra VELUX FONDEN skal ny forskning forankret på Institut for Antropologi afdække, hvordan man skaber grønne nabofællesskaber i boligforeninger, og hvilken effekt fællesskaberne har for den grønne omstilling og det sociale liv.
            </Trans>
          </p>
          <h2>
            <Trans ns={`home`} i18nKey={`p1.header`}>
              Projektets formål
            </Trans>
          </h2>
          <p><i>
            <Trans ns="home" i18nKey="project_description_link">
              Læs hele projektbeskrivelsen her: <a href={publications.find(r => r.id === 'pw0-1')?.url} target="_blank" rel="noreferrer">Link</a>
            </Trans>
          </i></p>
          <p>
            <Trans ns={`home`} i18nKey={`p1.p1`}>
              Projektet udfordrer forestillingen om, at den grønne omstilling primært foregår gennem individuel adfærd og teknologisk omstilling ved at påpege, at den i lige så høj grad kan finde sted som en grundlæggende social omstilling, der involverer nabofællesskaber. Projektet bidrager med viden og redskaber, der kan støtte etableringen af helt nye grønne nabofællesskaber samt overgangen fra grå boligforeninger til grønne nabofællesskaber og dermed styrke den grønne omstilling. Grå boligforeninger betegnes her som boligforeninger, der ikke har et direkte fokus på miljø, klima og bæredygtighed, mens grønne nabofællesskaber defineres som grønne, hvor deres medlemmer deler ønsket om at leve mere bæredygtigt og handler i fællesskab på dette ønske.
            </Trans>
          </p>
          <p>
            <Trans ns={`home`} i18nKey={`p2.p1`}>
              SAMSKAB projektet har fem sammenhængende formål, som er at:
            </Trans>
          </p>
          <ol>
            <li>
              <Trans ns={`home`} i18nKey={`p2.li1`}>
                Opnå viden om hvordan grønne nabofællesskaber etableres, enten fra start
                eller gennem en transformation af eksisterende grå boligforeninger.
              </Trans>
            </li>
            <li>
              <Trans ns={`home`} i18nKey={`p2.li2`}>
                Anvende denne viden til at styrke og opskalere udbredelsen af grønne
                nabofællesskaber og dermed bidrage til den borgerdrevne grønne omstilling.
              </Trans>
            </li>
            <li>
              <Trans ns={`home`} i18nKey={`p2.li3`}>
                Dokumentere miljø- og social impact i forhold til grønne nabofællesskaber.
              </Trans></li>
            <li>
              <Trans ns={`home`} i18nKey={`p2.li4`}>
                Bidrage med videnskabelig viden om hvordan miljøadfærd og praksis kan
                styrkes, påvirkes og opskaleres gennem fællesskab og kollektiv handling.
              </Trans></li>
            <li>
              <Trans ns={`home`} i18nKey={`p2.li5`}>
                Følge udbredelsen af min. 100 grønne nabofællesskaber i Danmark.
                Udgangspunktet for SAMSKAB er, at en betydende grøn omstilling kræver ikke blot
              </Trans></li>
          </ol>
          <p><Trans ns={`home`} i18nKey={`p2.p2`}>
            Udgangspunktet for SAMSKAB er, at en betydende grøn omstilling kræver ikke blot
            politisk regulering og teknologiske løsninger, men også civil handling og
            adfærdsændringer. Hypotesen i SAMSKAB bygger på, at samarbejde og kollektiv
            handling for fælles mål i grønne nabofællesskaber forstærker miljøadfærd og fremmer
            både en miljømæssig og en social dagsorden.
          </Trans>
          </p>
          <h2>
            <Trans ns={`home`} i18nKey={`p3.h1`}>
              Casestudies i tre boligområder
            </Trans></h2>
          <p>
            <Trans ns={`home`} i18nKey={`p3.p1`}>
              Projektet ligger i forlængelse af det nu afsluttede projekt Compass, der havde særligt fokus på at studere økosamfund, fødevarefællesskaber og tilblivelsen af grønne fællesskaber i eksisterende bofællesskaber og økolandsbyer.
            </Trans>
          </p>
          <p>
            <Trans ns={`home`} i18nKey={`p3.p2`}>
              Det nye projekt udvider perspektivet ved at undersøge, hvordan man med afsæt i forskellige best-practice-eksempler kan udvikle grønne fællesskaber i tre meget forskellige boligområder: Fra den københavnske bydel Tingbjerg, som er præget af almennyttigt boligbyggeri og mange ressourcesvage borgere, over landsbyen Hvalsø, der har mange nye bofællesskaber og ressourcestærke borgere, til Vinge ved Frederikssund, der er Danmark største byudviklingsprojekt.
            </Trans>
          </p>
          <p>
            <Trans ns={`home`} i18nKey={`p3.p3`}>
Erfaringerne fra casestudierne skal give svar på, hvordan beboere og boligselskaber kan udbrede de grønne fællesskaber i både eksisterende ’grå boligområder’ og nye byggerier, men også på tværs af ejerformer og forskellige bo- og boligformer.
            </Trans>
          </p>
          <p>
            <Trans ns={`home`} i18nKey={`p3.p4`}>
              Ambitionen er, at projektet frem mod 2025 kan være med til at understøtte etableringen af 100 nye nabofællesskaber og samtidig dokumentere den sociale og miljømæssige effekt.
            </Trans>
          </p>
          <p>
            <Trans ns={`home`} i18nKey={`p3.p5`}>
              ”Vi vil bidrage til den grønne omstilling ved at knække koden bag skabelsen af levedygtige fællesskaber. Sammen med praktikere vil vi udvikle redskaber til at facilitere etableringen og opskaleringen af nye grønne nabofællesskaber i forskellige boligområder og boligtyper,” forklarer Quentin Gausset.
            </Trans>
          </p>
          <p>
            <Trans ns={`home`} i18nKey={`p3.p6`}>
              Her spiller projektets tre eksterne partnere en afgørende rolle: Virksomhederne Behave Green og Bærebo samt foreningen Omstilling Nu skal være med til at sikre den organisatoriske og lokale forankring i tæt parløb med forskerne. De tre organisationer arbejder på forskellig vis med grøn omstilling og beboerfællesskaber.
            </Trans>
          </p>
          <p>
            <Trans ns={`home`} i18nKey={`p3.p7`}>
              Desuden samarbejder projektet med en række kommuner, boligorganisationer og andre aktører, som har interesse i at promovere grøn omstilling i boligsektoren.
            </Trans>
          </p>

        </div>
        <div className={`${styles.flex_child30} flex_child30`}>
          <Infobox>
            <h2>{t('infobox.header')}</h2>
            <p>{t('infobox.p1')}</p>
            <p>
              <Trans ns="home" i18nKey="infobox.p2">
                Projektet er et samarbejde mellem fire kernepartnere (<a href='https://www.ku.dk/' rel="noreferrer" target="_blank">Københavns Universitetet</a>, <a href='https://behavegreen.dk/' rel="noreferrer" target="_blank">Behave Green</a>, <a href='https://www.baerebo.org/' rel="noreferrer" target="_blank">Bærebo</a>, <a href='https://omstilling.nu' rel="noreferrer" target="_blank">Omstilling Nu</a>). Herudover inddrager projektet kommuner, boligorganisationer og andre aktører inden for grøn omstilling i boligsektoren.
              </Trans>
            </p>
            <p>
              <Trans ns="home" i18nKey="infobox.p3">
                Fra Københavns Universitet deltager ud over lektor og projektleder <a href="https://antropologi.ku.dk/ansatte/professorer/?pure=da/persons/151879" rel="noreferrer" target="_blank">Quentin Gausset</a>, adjunkt <a href="https://antropologi.ku.dk/ansatte/adjunkt-og-postdoc/?pure=da/persons/377218" rel="noreferrer" target="_blank">Simon Westergaard Lex</a>, Institut for Antropologi, og professor <a href="https://polsci.ku.dk/ansatte/vip/?pure=da/persons/148352" rel="noreferrer" target="_blank">Jens Villiam Hoff</a>,&nbsp;Institut for Statskundskab.
              </Trans>
            </p>
            <p>
              {t('infobox.p4')}
            </p>
            <p>
              <Trans ns="home" i18nKey="infobox.p5">
                Læs også VELUX FONDEN’s pressemeddelelse: <a href="https://veluxfoundations.dk/da/humpraxis-projekter-2021" rel="noreferrer" target="_blank">HUMpraxis rykker ud til samfundsudfordringer: Fra vold og stoffer til bæredygtighed</a>.
              </Trans>
            </p>
          </Infobox>
        </div>
      </div>
    </div>
  )
}

export default Home;