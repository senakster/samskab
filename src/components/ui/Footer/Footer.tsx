import React from 'react';
import styles from './Footer.module.scss';
import LayoutToggle from 'components/global/LayoutToggle/LayoutToggle';
import images from '_media/img/images';
import CollabCard from 'components/views/Collaborators/CollabCard';
import { collaborators } from '_data/collabData';
import logos from '_media/img/logo';
import config from '_config';


const Footer: React.FC = ({children}) => {
  
  return (
    <div className={styles.Footer} data-testid="Footer">
      <div style={{ width: '100%',textAlign:'center'}}>
        <img
          alt="main logo"
          style={{ display: 'inline-block', maxWidth: '100vw', maxHeight: '25vw' }}
          src={logos.Logo2SAMSKAB.url.replace('__PUBLICURL__',config.public_static)}
        />
      </div>
    <KernepartnerLogoer />
    {children}
    {/* <LayoutToggle /> */}
  </div>
);
}

export default Footer;

const KernepartnerLogoer: React.FC = () => {
  return (
    <div className={styles.KernepartnerLogoer}>
      {collaborators.key_partners.map((c) =>
        <CollabCard  variant="logoOnly" data={c} />
      )}
      <CollabCard variant='logoOnly' data={collaborators.funding[0]} />
    </div>
  )
}

