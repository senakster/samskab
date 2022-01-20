import React from 'react';
import styles from './Loading.module.scss';

const Loading: React.FC = () => (
  <div className={styles.Loading} data-testid="Loading">
    Loading Component
  </div>
);

export default Loading;
