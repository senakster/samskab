import React from 'react';
import styles from './Infobox.module.scss';

const Infobox: React.FC = ({children}) => (
  <div className={styles.Infobox} data-testid="Infobox">
    {children}
  </div>
);

export default Infobox;
