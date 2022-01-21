import React from 'react';
import styles from './Error.module.scss';

const Error: React.FC = () => (
  <div className={styles.Error} data-testid="Error">
    <h1>Error - the requested ressource is not available</h1>
  </div>
);

export default Error;
