import React from 'react';
import { useTranslation } from 'react-i18next';
import { people } from '_data/peopleData';
import styles from './Participants.module.scss';

const Participants: React.FC = () => {
  const {t} = useTranslation('participants')
  return (
    <>
    <h1 className="page_title">{t('Deltagere')}</h1>
    <div className={styles.Participants} data-testid="Participants">
      {/* {JSON.stringify(people)} */}
    </div>
    </>
);
}

export default Participants;
