import React from 'react'
import styles from './FancyBurger.module.scss'

export const FancyBurger: React.FC<{ variant?: string, toggle: (e: any) => void, show: boolean }> = ({ variant, toggle, show }) => {
  return (
    <div className={`${styles.FancyBurger} ${variant && styles[variant]}`}>
      <input type="checkbox" id={styles['burger-toggle']} checked={show} onClick={toggle} readOnly/>
      <label htmlFor={styles['burger-toggle']} className={styles['burger-menu']}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </label>
    </div>
  )
}

export default FancyBurger