import React from 'react'
import styles from './TextIcon.module.scss'

const TextIcon: React.FC<{ label: string, subtitle?: string, variant?: string, classes?: string[], color?: string, description?: string, title?: string, onClick?: (v?: any) => any }> = ({ label, subtitle, variant, classes, color, title, onClick}) => {
    
    return (
        <>
            <div style={{ backgroundColor: color, background: `linear-gradient(45deg, ${color},${color} 50%, white)`, cursor: onClick ? 'pointer' : 'initial' }} className={`${styles.WPIcon} ${variant ? styles[variant] : ''} ${classes?.map(c => styles[c]).join(' ')}`} title={title} onClick={onClick}>
                <span className={styles.title}>{label}</span>
                <span className={styles.subtitle}>{subtitle}</span>
            </div>
        </>
    )
}
export default TextIcon