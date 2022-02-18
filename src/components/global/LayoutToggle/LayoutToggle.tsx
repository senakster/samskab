import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFancyBG, setFontFamily, setHeaderFont, setTheme } from '_state/features/layout/layoutSlice';
import { State } from '_state/store';
import Themes from '../Themes/Themes';
import styles from './LayoutToggle.module.scss';

const LayoutToggle: React.FC = () => {
  const dispatch = useDispatch()
  const l = useSelector((state: State) => state.layout)

  function handleThemeChange (e: any) {
    const { value } = e.target
    dispatch(setTheme(value))
  }
  
  function handleFontChange(e: any) {
    const { value } = e.target
    dispatch(setFontFamily(value))
  }
  function handleHeaderFontChange(e: any) {
    const { value } = e.target
    dispatch(setHeaderFont(value))
  }
  return (
    <>
   <h1 className="page_title">Theme testing</h1>
  <div className={styles.LayoutToggle} data-testid="LayoutToggle">
    
    <Themes variant="minimal" theme={l.theme} font={l.fontFamily} handlers={{ handleThemeChange, handleFontChange, handleHeaderFontChange }} />
    <label>
      <span>Toggle Fancy Background</span>
      <input type="checkbox" checked={l.fancyBG} onChange={() => { dispatch(setFancyBG(!l.fancyBG))}}/>
    </label>
  </div>
  </>
);
}
export default LayoutToggle;
