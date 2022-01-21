import React from 'react';
import styles from './Collaborators.module.scss';
import CollabCard from './CollabCard';
import { collaborators } from './collabData';
import { Trans, useTranslation } from 'react-i18next';


const Collaborators: React.FC = () => {
  const { t } = useTranslation('collaborators')
  return (
    <>
      {/* KERNEPARTNERE */}
      <h1 className="page_title">{t('collaborators')}</h1>
      <div className={styles.Collaborators} data-testid="Collaborators">
        <h2>{t('Kernepartnere')}</h2>
        <div className={styles.category}>
          {collaborators.key_partners.map((c) =>
            <CollabCard key={c.id} data={c} />
          )}
        </div>

        {/* FORSKNING */}
        <h2>{t('forskningssamarbejdspartnere')}</h2>
        <div className={styles.category}>
          {collaborators.forskningssamarbejdspartnere.map(c =>
            <CollabCard key={c.id} data={c} />
          )}
        </div>

        {/* FUNDING */}
        <h2>{t('Projektet er støttet af')}</h2>
        <div className={styles.category}>
          {collaborators.funding.map(c =>
            <CollabCard key={c.id} data={c} />
          )}
        </div>

        {/* PRAKSISPARTNERE */}
        <h2>{t('praksissamarbejdspartnere')}</h2>
        <div className={styles.category}>
          <div className={styles.subCatBox}>
          <h3>{t('Kommuner')}</h3>
          <ul>
          {collaborators.praksissamarbejdspartnere.kommuner.map(c =>
            <li><Mention key={c.name} {...c} /></li>
          )}
          </ul>
          </div>
          <div className={styles.subCatBox}>
            <h3>{t('Boligselskaber og -organisationer')}</h3>
            <ul>
              {collaborators.praksissamarbejdspartnere.boligorganisationer.map(c =>
                <li><Mention key={c.name} {...c} /></li>
              )}
            </ul>
          </div>
          <div className={styles.subCatBox}>
            <h3>{t('Andre praksis-samarbejdspartnere')}</h3>
            <ul>
              {collaborators.praksissamarbejdspartnere.andre.map(c =>
                <li><Mention key={c.name} {...c} /></li>
              )}
            </ul>
          </div>
        </div>

        {/* RÅDGIVENDE PANEL */}
        <h2>{t('Rådgivende panel')}</h2>
        <div className={styles.category}>
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
      <a href={url || undefined} target="_blank" rel="noreferrer"><span className={`themed_title ${styles.mentionTitle}`}>{name}</span></a>
      <p>
        <Trans na="collaborators" i18nKey={`${name.replace('.','_')}`} >
        {description}
        </Trans>
      </p>
    </div>
  )
}