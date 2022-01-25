import React from 'react';
import { useTranslation } from 'react-i18next';
import { people } from '_data/peopleData';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact')
  return (
    <>
      <h1 className="page_title">{t('Kontakt')}</h1>
      <div className={styles.Contact} data-testid="Contact">
        {/* {JSON.stringify(people)} */}
      </div>
    </>
  );
}

export default Contact;
