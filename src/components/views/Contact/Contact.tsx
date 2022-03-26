import React from 'react';
import { useTranslation } from 'react-i18next';
import { people } from '_data/peopleData';
import logos from '_media/img/logo';
import styles from './Contact.module.scss';
import ContactCard from './ContactCard';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact')
  return (
    <>
      <h1 className="page_title">
      <img alt="main logo" src={logos.logo1HvidKvadrat.url} className={`inline-hImg`}/>
      {t('Kontakt')}</h1>
      <div className={styles.Contact} data-testid="Contact">
        <ContactCard data={people.find(p => p.id === 'KU01')!}/>
      </div>
    </>
  );
}

export default Contact;
