import React from 'react';
import styles from './Footer.module.scss';
import LayoutToggle from 'components/global/LayoutToggle/LayoutToggle';


const Footer: React.FC = ({children}) => {
  
  return (
    <div className={styles.Footer} data-testid="Footer">
    {children}
    <LayoutToggle />
  </div>
);
}

export default Footer;
