import React from 'react';
import styles from './SvgIcon.module.scss';
import sprites from '_media/img/svg-defs.svg';


const SvgIcon: React.FC<{ id: string, width?: string; height?: string}> = ({ id, height, width}) => {
  const href = `${sprites}#${id}`
  return (
      <svg aria-hidden="true" focusable="false" className={styles.SvgIcon} style={{height: height || '100%', width: width || '100%'}}>
        <use xlinkHref={href} />
      </svg>
  )
}

export default SvgIcon;
