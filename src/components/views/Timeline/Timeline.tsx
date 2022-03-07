// import TextIcon from 'components/ui/TextIcon/TextIcon';
import Hero from 'components/ui/Hero/Hero';
import TextIcon from 'components/ui/TextIcon/TextIcon';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import workPackages, { phases } from '_data/workPackagesData';
import PhaseBox from './PhaseBox';
import styles from './Timeline.module.scss';
import WorkPackageBox from './WPBox';
import { wallpapers } from '_media/img/images';
import TimeTable from './TimeTable';
const Timeline: React.FC = () => {
  const {t} = useTranslation('timeline')
  const location = useLocation()  
  const [open, setOpen] = React.useState<string>(location.hash.replace('#','') || 'wp1') 

  function handleOpen (id: string) {
    setOpen(id)
  }
  return (
    <>
      <h1 className="page_title">{t('Struktur')}</h1>
      <div className={styles.Timeline} data-testid="Timeline">
        <Hero classes={[]} height={60} img={wallpapers.find(img => img.id === 'prag')!.url} >
          <h1>
            <Trans ns="timeline" i18nKey="pagetitle">
              SAMSKAB er struktureret i 3 faser og 5 Work Packages
            </Trans>
          </h1>
          <TimeTable />
        </Hero>
      <div className={styles.phases}>
          {/* <Hero variant="light" classes={['rounded']} height={10} img={imageArr.find(img => img.id === 'boliger')!.url} > */}
            <h1><Trans ns="timeline" i18nKey="phases.title" >
              Faser
            </Trans></h1>
          {/* </Hero> */}
        <ul>
          {phases.map(p => 
            <li key={p.id}>
              <PhaseBox data={p} openWP={handleOpen}/>
            </li>
            )}
        </ul>
      </div>
      <div id={'workPackages'} className={styles.workPackages}>
          <h1>
            <Trans ns="timeline" i18nKey="wp.title" >
              WORK PACKAGES
            </Trans>
          </h1>
        <ul className={styles.wpList}>
            {workPackages && workPackages.map(w =>
              <li key={w.id} className={`${open === w.id ? styles.active : ''}`}>
              <TextIcon label={`${w.id.toUpperCase()}`} variant="circle" classes={['small']} color="#9AB9CB" title={t(w.name || '')} onClick={() => handleOpen(w.id)}/>
              <div className={`${styles.wpDescription} `}>{t(w.name)}</div>
            </li>
          )}
          </ul>
          <div className={styles.WPViewport}>
            <div className={styles.WPContainer} style={{ '--index': workPackages.findIndex((w) => w.id === open)} as React.CSSProperties }>
              {workPackages.map(w =>
                <WorkPackageBox key={w.id} data={w} active={open} openWP={setOpen} />
              )}
            </div>
          </div>
      </div>
      </div>
  </>
);
}

export default Timeline;
