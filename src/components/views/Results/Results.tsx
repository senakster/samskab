import React, { Suspense } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { onlyUnique } from '_helpers';
import PublicationCard from './PublicationCard';
import styles from './Results.module.scss';
// import rcStyles from './ResultCard.module.scss'
import results, { TResult } from '_data/resultsData';
import publications from '_data/publicationsData';
import { HashLink } from 'react-router-hash-link';
import ResultCard from './ResultCard';
import { useLocation } from 'react-router';
import workPackages from '_data/workPackagesData';
import pageMap, { Quickjump, TPageMap } from '_helpers/pagemap/pagemap';
import '_helpers/pagemap/pagemap.scss';
import Loading from 'components/global/Loading/Loading';
// export function onlyUnique(value: string | number, index: number, self: any) {
//   return self.indexOf(value) === index;
// }

const Results: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation('results')

  const [load_page_map, setLoad_page_map] = React.useState<TPageMap | null>(null)
  



  type TFilterProps = { [key: string]: TResult['status'] | null, status: TResult['status'] | null }
  const noFilter: TFilterProps = {
    status: null,
  }
  const [filter, setFilter] = React.useState<TFilterProps>(noFilter)
  function handleFilter(e: any) {
    const {name, value} = e.target
    console.log(value, filter[name])
    setFilter({
      ...filter,
      [name]: value === filter[name] ? null : value
    })
  }
  React.useEffect(() => {
    setFilter(noFilter)
  },[location.hash])

  React.useEffect(() => {
    setLoad_page_map(pageMap())
    // setPage_map(pageMap())
  }, [])
  return (
    <>
      <h1 className="page_title">
        <Trans ns="results" i18nKey="title">
          Resultater og publikationer
        </Trans>
      </h1>
      {load_page_map ? (
        <Suspense fallback={<Loading />}>
          <Quickjump data={load_page_map} />
        </Suspense>
      ) : null}

      <div className={styles.Results} data-testid="Results">
        {publications.length > 0 &&
        <div id={`publikationer`} className="__anchor_top">
        <h2 className={`${styles.catTitle}`}>{t('Publikationer')}</h2>
        <div className={styles.PublicationsList}>
          {publications && publications.map(r => r.published.year)
            .sort().reverse()
            .filter(onlyUnique)
            .map(y =>
              <div key={y} className={styles.byYearBox}>
                <h3 id="a_pubByYear" className="__anchor">{y}</h3>
                <div className={styles.publicationCards}>
                  {publications.filter(r => r.published.year === y)
                    .map(r => <PublicationCard key={r.id} data={r} />)}
                </div>
              </div>
            )}
        </div>
        </div>}
        {results.length > 0 && 
          <div id={`resultater`} className="__anchor_top">
          <h2  className={`${styles.catTitle}`}>
          {t('Andre Resultater')}
        </h2>
        <div>
          {/* <h4>{t('filtre')}</h4> */}
          {/* <h5>{t('status')}</h5> */}
          {(['opfyldt', 'igangsat', 'afventer', 'udskudt'] as TResult['status'][]).map(status =>
            <button 
            key={status} 
            className={`${styles.legend} 
            ${styles[status]} 
            ${filter.status === status ? styles.active : ''}`} 
            name={'status'} value={status} 
            onClick={handleFilter}>{t(status)}
            </button>
            )}  
        </div>
        <div className={styles.ResultsList}>
            {results.map(r => r.wp)
            .map(wp => 
            <div key={wp}>
            <h3 id={wp} className="__anchor"><HashLink to={`/timeline#${wp}`}>{workPackages.find(w => w.id === wp)?.name}</HashLink></h3>
              <ul className={styles.liList}>
              {results.find(r => r.wp === wp)?.list
              // .filter((l) => filter.status === l.status || filter.status === null)
                    .map(l => 
                    <li key={l.id}>
                      <ResultCard 
                      data={l} 
                      focus={location.hash.replace('#','') === l.id}
                      nonfocus={filter.status && filter.status !== l.status} />
                    </li>)}
            </ul>
            </div>
            )}
            {/* <ResultCard data={r} focus={location.hash.replace('#', '') === r.id} /> */}
        </div>
        </div>
        }
      </div>

    </>);
}

export default Results;
