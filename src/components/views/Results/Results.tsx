import React from 'react';
import { useTranslation } from 'react-i18next';
import { onlyUnique } from '_helpers';
import ResultCard from './ResultCard';
import styles from './Results.module.scss';
import results from './reultsData';

// export function onlyUnique(value: string | number, index: number, self: any) {
//   return self.indexOf(value) === index;
// }

const Results: React.FC = () => {
  const { t } = useTranslation('results')
  return (
    <>
      <h1 className="page_title">{t('results')}</h1>
      <div className={styles.Results} data-testid="Results">
        {results.map(r => r.published.year)
        .sort().reverse()
        .filter(onlyUnique)
        .map(y => 
        <div key={y} className={styles.byYearBox}>
          <h3>{y}</h3>
            <div className={styles.resultCards}>
              {results.filter(r => r.published.year === y)
              .map(r => <ResultCard key={r.id} data={r} />)}
            </div>
          </div>
        )}
      </div>
    </>);
}

export default Results;
