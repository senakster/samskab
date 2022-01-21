import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Timeline.module.scss';

const Timeline: React.FC = () => {
  const {t} = useTranslation('timeline')
  return (
    <>
      <h1 className="page_title">{t('timeline')}</h1>
      <div className={styles.Timeline} data-testid="Timeline">
      <h1>WORK PACKAGES (WP) OG FASER</h1>
      </div>
  </>
);
}

export default Timeline;
