import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './Header.module.scss';
import images from '_media/img/images'
import LanguageSelector from 'components/global/LanguageSelector/LanguageSelector.lazy';
// LAYOUT TOGGLE TESTING
import { useSelector } from 'react-redux';
import { State } from '_state/store';

// imageCarousel data
const interval = 10000 //20000
const variant = 'blurry';
// const imgCarouselLists = {
  
// }
const Header: React.FC= ({children}) => {
  // LAYOUT TOGGLE TESTING
  const fancyBG = useSelector((state: State) => state.layout.fancyBG)

  const scrollRef = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    function checkScrolled(){
      // const { offsetTop } = scrollRef.current!
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
      {/* <img src={images[0].url} alt="" /> */}
    </div>
    <div ref={scrollRef} className={` ${scrolled ? styles.scrolled : ''}`}>
      <LanguageSelector variant="fixed" scroll={scrolled}/>
      <div className={styles.fix_container}>
          <h1>{process.env.REACT_APP_TITLE}
          {/* <img
          alt="" 
          style={{ display: 'inline-block', maxWidth: '100vw', maxHeight: '10vw' }} 
          src="https://www.omstilling.nu/wp-content/uploads/2013/08/timthumb.jpg" 
          /> */}
          </h1>

      {children}
      </div>
    </div>
  </div>
);
}

export default Header;
