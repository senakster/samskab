import React from 'react';
import SvgIcon from 'components/ui/SvgIcon/SvgIcon';
import styles from './LanguageSelector.module.scss';
import { useTranslation } from 'react-i18next';
import Button from 'components/ui/Button/Button';

const LanguageSelector: React.FC<{scroll?: boolean, variant?: string}> = ({scroll, variant}) => {
  const [active, setActive] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(scroll || false)
  const { i18n } = useTranslation()
  const langs = [
    { lc: 'da', name: 'Dansk' }, 
    { lc: 'en', name: 'English' },
  ];

  const [state, setState] = React.useState({
    active: false,
    lng: i18n.language || 'da',
  });

  React.useEffect(() => {
    setState({
      ...state,
      lng: i18n.language,
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[i18n.language])

  React.useEffect(() => {
    function onScroll(){
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false)
    }
    !scroll && window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function changeLang(e: any) {
    const { value } = e.target;

    i18n.changeLanguage(value)
  }
  function toggleActive() {
    setActive(!active)
  }
  console.log(variant)
  return (
    <div 
    className={`${styles.LanguageSelector} 
    ${active ? styles.active : ''} 
    ${scrolled || scroll ? styles.scrolled : ''}
    ${variant ? styles[variant] : ''}
    `} 
    data-testid="LanguageSelector"
    onClick={toggleActive}
    >
      <div className={styles.currentLng}>
        <SvgIcon {...{ id: 'globe', width: '2em' }} />
        <div className={styles.options}>
          <ul>
            {langs.map((l,i) =>
              <li key={l.lc} style={{ '--nthType': `${i}` } as React.CSSProperties} className={state.lng === l.lc ? styles.active : ''}>
                <Button label={l.name} value={l.lc} onClick={changeLang} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
