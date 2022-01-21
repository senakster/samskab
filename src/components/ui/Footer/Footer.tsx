import React from 'react';
import styles from './Footer.module.scss';
import images from '_media/img/images'


const Footer: React.FC = ({children}) => {
  
  return (
    <div className={styles.Footer} data-testid="Footer">
    {children}

  </div>
);
}

export default Footer;
