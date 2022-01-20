import Infobox from 'components/ui/Infobox/Infobox';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  return (

    <div className={styles.Home} data-testid="Home">
      <div className={`${styles.flex_container} flex_container`}>
        <div className={`${styles.flex_child70} flex_child70`}>
          <h1>{t('title')}</h1>
          <p>{t('subheader')}</p>
          <h2>{t('p1.header')}</h2>
          <p>{t('p1.p1')}</p>
          {/* <p>{t()}</p> */}
        </div>
        <div className={`${styles.flex_child30} flex_child30`}>
          <Infobox> 
            <h2>{t('infobox.header')}</h2>
            <p>{t('infobox.p1')}</p>
            <p>
              <Trans ns="home" i18nKey="infobox.p2">
                Projektet er et samarbejde mellem fire kernepartnere (<a href='https://www.ku.dk/' rel="noreferrer" target="_blank">Københavns Universitetet</a>, <a href='https://naboskab.dk/' rel="noreferrer" target="_blank">Naboskab</a>, <a href='https://www.baerebo.org/' rel="noreferrer" target="_blank">Bærebo</a>, <a href='https://omstilling.nu' rel="noreferrer" target="_blank">Omstilling Nu</a>). Herudover inddrager projektet kommuner, boligorganisationer og andre aktører inden for grøn omstilling i boligsektoren.
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
