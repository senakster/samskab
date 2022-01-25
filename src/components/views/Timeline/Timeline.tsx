import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import workPackages, { phases } from '_data/workPackagesData';
import PhaseBox from './PhaseBox';
import styles from './Timeline.module.scss';
import WorkPackageBox from './WPBox';

const Timeline: React.FC = () => {
  const {t} = useTranslation('timeline')
  const location = useLocation()  
  const [open, setOpen] = React.useState<string>(location.hash.replace('#','') || '') 

  function handleOpen (id: string) {
    setOpen(id)
  }
  return (
    <>
      <h1 className="page_title">{t('timeline')}</h1>
      <div className={styles.Timeline} data-testid="Timeline">
      
      <div className={styles.phases}>
         <h1>
            <Trans ns="timeline" i18nKey="phases.title" >
              Faser
            </Trans>
        </h1>
        <ol>
          {phases.map(p => 
            <li key={p.id}>
              <PhaseBox data={p} openWP={handleOpen}/>
            </li>
            )}
        </ol>
      </div>
      <div id={'workPackages'} className={styles.workPackages}>
          <h1>
            <Trans ns="timeline" i18nKey="wp.title" >
              WORK PACKAGES (WP)
            </Trans>
          </h1>
        <ul>
          {workPackages.map(w =>
            <li key={w.id}>
              <WorkPackageBox data={w} active={open} openWP={setOpen} />
            </li>
          )}
          </ul>
      </div>
      </div>
  </>
);
}

export default Timeline;
