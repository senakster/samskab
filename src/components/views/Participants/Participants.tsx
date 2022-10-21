import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { people } from '_data/peopleData';
import logos from '_media/img/logo';
import ContactCard from '../Contact/ContactCard';
import styles from './Participants.module.scss';

const Participants: React.FC = () => {
  const {t} = useTranslation('participants')
  return (
    <>
      <h1 className="page_title">
        {/* <img
          alt="main logo"
          src={logos.logo1HvidKvadrat.url}
          className={`inline-hImg`}
        /> */}
        <Trans ns="participants" i18nKey="title">
          Deltagere
        </Trans>
        {/* <img
          alt="main logo"
          src={logos.logo1HvidKvadrat.url}
          className={`inline-hImg`}
        /> */}
      </h1>
    <div className={styles.Participants} data-testid="Participants">
      <div className={styles.peopleList}>
        <ContactCard data={people.find(p => p.id === 'KU01')!} />
        <ContactCard data={people.find(p => p.id === 'KU03')!} />
        <ContactCard data={people.find(p => p.id === 'KU02')!} />
        <ContactCard data={people.find(p => p.id === 'KU04')!} />
          <ContactCard data={people.find(p => p.id === 'BB01')!} />
          <ContactCard data={people.find(p => p.id === 'BB02')!} />
        <ContactCard data={people.find(p => p.id === 'NB01')!} />
        <ContactCard data={people.find(p => p.id === 'NB02')!} />
          <ContactCard data={people.find(p => p.id === 'NB03')!} />
          <ContactCard data={people.find(p => p.id === 'NB04')!} />
          <ContactCard data={people.find(p => p.id === 'NB05')!} />
          <ContactCard data={people.find(p => p.id === 'ON01')!} />
          <ContactCard data={people.find(p => p.id === 'ON02')!} />
        <ContactCard data={people.find(p => p.id === 'WEB01')!} />

      </div>
    </div>
    </>
);
}

export default Participants;
