import React from 'react';
import styles from './Collaborators.module.scss';
import CollabCard from './CollabCard';
import { collaborators } from '_data/collabData';
import { Trans, useTranslation } from 'react-i18next';
import logos from '_media/img/logo';


const Collaborators: React.FC = () => {
  const { t } = useTranslation('collaborators')
  return (
    <>
      {/* KERNEPARTNERE */}
      <h1 className="page_title">
        {/* <img
          alt="main logo"
          src={logos.logo1HvidKvadrat.url}
          className={`inline-hImg`}
        /> */}
        <Trans ns="collaborators" i18nKey="title">
          Samarbejdspartnere
        </Trans>
        {/* <img
          alt="main logo"
          src={logos.logo1HvidKvadrat.url}
          className={`inline-hImg`}
        /> */}
      </h1>
      <div className={styles.Collaborators} data-testid="Collaborators">
        <h2 className={styles.subHeading}>{t('Kernepartnere')}</h2>
        <div className={styles.category}>
          {collaborators.key_partners.map((c) =>
            <CollabCard key={c.id} data={c} />
          )}
        </div>

        {/* FORSKNING */}
        <h2 className={styles.subHeading}>{t('Forskningssamarbejdspartnere')}</h2>
        <div className={styles.category}>
          {collaborators.forskningssamarbejdspartnere.map(c =>
            <CollabCard key={c.id} data={c} />
          )}
        </div>

        {/* FUNDING */}
        <h2 className={styles.subHeading}>{t('Projektet er støttet af')}</h2>
        <div className={styles.category}>
          {collaborators.funding.map(c =>
            <CollabCard key={c.id} data={c} />
          )}
        </div>

        {/* PRAKSISPARTNERE */}
        <h2 className={styles.subHeading}>{t('Praksissamarbejdspartnere')}</h2>
        <div className={styles.category}>
          <div className={styles.subCatBox}>
          <h3>{t('Kommuner')}</h3>
          <ul>
          {collaborators.praksissamarbejdspartnere.kommuner.map(c =>
            <li key={c.name}><Mention {...c} /></li>
          )}
          </ul>
          </div>
          <div className={styles.subCatBox}>
            <h3>{t('Boligselskaber og -organisationer')}</h3>
            <ul>
              {collaborators.praksissamarbejdspartnere.boligorganisationer.map(c =>
                <li key={c.name}><Mention {...c} /></li>
              )}
            </ul>
          </div>
          <div className={styles.subCatBox}>
            <h3>{t('Andre praksissamarbejdspartnere')}</h3>
            <ul>
              {collaborators.praksissamarbejdspartnere.andre.map(c =>
                <li key={c.name}><Mention {...c} /></li>
              )}
            </ul>
          </div>
        </div>

        {/* RÅDGIVENDE PANEL */}
        <h2 className={styles.subHeading}>{t('Rådgivende panel')}</h2>
        <div className={`${styles.category} ${styles.advisoryBoard}`}>
          {collaborators.rådgivendepanel.map(c =>
            <Mention key={c.name} {...c} variant={`flex11`}/>
          )}
      </div>
      </div>      
      </>
  );
}

export default Collaborators;

const Mention: React.FC<{name: string, description: string, url: string, variant?: string}> = ({name, description, url, variant}) => {
  return (
    <div className={`${styles.Mention} ${variant ? styles[variant] : ''}`}>
      <a href={url || undefined} target="_blank" rel="noreferrer"><h4 className={`themed_title ${styles.mentionTitle}`}>{name}</h4></a>
      <p>
        <Trans ns="collaborators" i18nKey={`${name.replace('.','_')}`} >
        {description}
        </Trans>
      </p>
    </div>
  )
}

