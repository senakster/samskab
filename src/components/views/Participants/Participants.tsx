import React from 'react';
import { useTranslation } from 'react-i18next';
import { people } from '_data/peopleData';
import ContactCard from '../Contact/ContactCard';
import styles from './Participants.module.scss';

const Participants: React.FC = () => {
  const {t} = useTranslation('participants')
  return (
    <>
    <h1 className="page_title">{t('Deltagere')}</h1>
    <div className={styles.Participants} data-testid="Participants">
      <div className={styles.peopleList}>
        <ContactCard data={people.find(p => p.id === 'KU01')!} />
        <ContactCard data={people.find(p => p.id === 'ON01')!} />
        <ContactCard data={people.find(p => p.id === 'ON02')!} />
        <ContactCard data={people.find(p => p.id === 'NB01')!} />
        <ContactCard data={people.find(p => p.id === 'NB02')!} />
          <ContactCard data={people.find(p => p.id === 'WEB01')!} />

      </div>
    </div>
    </>
);
}

export default Participants;
