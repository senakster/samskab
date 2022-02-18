import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './Header.module.scss';
import images from '_media/img/images'
import LanguageSelector from 'components/global/LanguageSelector/LanguageSelector.lazy';
// LAYOUT TOGGLE TESTING
import { useSelector } from 'react-redux';
import { State } from '_state/store';
import { useNavigate } from 'react-router';
import logos from '_media/img/logo';
import SvgIcon from '../SvgIcon/SvgIcon';

// imageCarousel data
const interval = 10000 //20000
const variant = 'blurry';
// const imgCarouselLists = {
  
// }
const Header: React.FC= ({children}) => {
  const navigate = useNavigate()
  // LAYOUT TOGGLE TESTING
  const fancyBG = useSelector((state: State) => state.layout.fancyBG)

  const scrollRef = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    function checkScrolled(){
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', checkScrolled)
    return () => {
      window.removeEventListener('scroll', checkScrolled)
    }
  },[])
  return (
    <div className={`${styles.Header}`} data-testid="Header">
    <div className={styles.backgroundImage}>
        {fancyBG && <ImageCarousel {...{images, interval, variant}}/>}
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
