import React from 'react';
import { useTranslation } from 'react-i18next';
import { people } from '_data/peopleData';
import styles from './Contact.module.scss';
import ContactCard from './ContactCard';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact')
  return (
    <>
      <h1 className="page_title">{t('Kontakt')}</h1>
      <div className={styles.Contact} data-testid="Contact">
        <ContactCard data={people.find(p => p.id === 'KU01')!}/>
      </div>
    </>
  );
}

export default Contact;
