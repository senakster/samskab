import React from 'react'
import styles from './Hero.module.scss'

const Hero: React.FC<{children: React.ReactNode, img: string, height?: number, variant?: string, classes?: string[]}> = ({children, img, height, variant, classes}) => {

    return (
        <div className={`${styles.Hero} ${variant ? styles[variant] :''} ${classes?.map ? classes.map(c => styles[c]).join(' ') : ''}`} style={{height: height ? `${height}vmax` : 'initial'}}>
            <img src={img} alt="hero" loading="lazy"/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
} 

export default Hero