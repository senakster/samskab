import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './Header.module.scss';
import {imageArr as images} from '_media/img/images'
import LanguageSelector from 'components/global/LanguageSelector/LanguageSelector';

// imageCarousel data
const interval = 20000
const variant = 'blurry';

const Header: React.FC = ({children}) => {
  const scrollRef = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    function checkScrolled(){
      const { offsetTop } = scrollRef.current!
      setScrolled(window.scrollY > offsetTop)
    }
    window.addEventListener('scroll', checkScrolled)
    return () => {
      window.removeEventListener('scroll', checkScrolled)
    }
  },[])
  return (
    <div className={styles.Header} data-testid="Header">
    <div className={styles.backgroundImage}>
      <ImageCarousel {...{images, interval, variant}}/>
    </div>
    <div ref={scrollRef} className={`${styles.flex_container} ${scrolled ? styles.scrolled : ''}`}>
      <LanguageSelector variant="fixed" scroll={scrolled}/>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      {children}
    </div>
  </div>
);
}

export default Header;
