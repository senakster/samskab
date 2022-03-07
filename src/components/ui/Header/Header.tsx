import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './Header.module.scss';
import {wallpapers} from '_media/img/images'
import LanguageSelector from 'components/global/LanguageSelector/LanguageSelector.lazy';
// LAYOUT TOGGLE TESTING
import { useSelector } from 'react-redux';
import { State } from '_state/store';
import logos from '_media/img/logo';

// imageCarousel data
const interval = 20000
const variant = 'blurry';


const Header: React.FC= ({children}) => {
  // LAYOUT TOGGLE TESTING
  const fancyBG = useSelector((state: State) => state.layout.fancyBG)

  const scrollRef = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    function checkScrolled(){
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', checkScrolled)
    return () => {
      window.removeEventListener('scroll', checkScrolled)
    }
  },[])
  return (
    <div className={`${styles.Header}`} data-testid="Header">
    <div className={styles.backgroundImage}>
        {fancyBG && <ImageCarousel {...{images: wallpapers, interval, variant}}/>}
    </div>
    <div ref={scrollRef} className={` ${scrolled ? styles.scrolled : ''}`}>
      <LanguageSelector variant="fixed" scroll={scrolled}/>
      <div className={styles.fix_container}>
      <div className={styles.content}>
          <div className={styles.mainLogo}>
            <img
              alt="main logo"
              src={logos.Logo1HvidSAMSKABtransparent.url}
            />
          </div>
        {children}
      </div>
      </div>
    </div>
  </div>
);
}

export default Header;
