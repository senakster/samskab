import React from 'react'
import styles from './ContactCard.module.scss'
import { TPeople } from '_data/peopleData'
import { useTranslation } from 'react-i18next'
import config from '_config'

const ContactCard: React.FC<{ data: TPeople }> = ({ data }) => {
    const { t } = useTranslation('contact')
    console.log(data)
        return (
        !data ? null : <div className={styles.ContactCard} style={{'--delay': 400 + Math.ceil(Math.random()*1000)} as React.CSSProperties}>
            <h3>{t(data.role || 'Deltager')}</h3>
            {<img className={styles.peoplePicture} src={`${data.img ? data.img.url?.replace('__PUBLICURL__', config.public_static || '') : `${config.public_static}/media/img/Logo 1 Hvid Kvadrat SAMSKAB.png`}`} alt={t(data.name)} loading="lazy" />}
            <div className={styles.pData}>
                {<h3>{t(data.name)}</h3>}
                {data.affiliations && data.affiliations.length > 0 && data.affiliations.map((a) => <i className={styles.affiliation} key={a}>{t(a)}</i>) }
                {data.email && <span><a href={`mailto:${data.email}?subject=SAMSKAB`}>{t(data.email || '')}</a></span>}
                {data.phone && <span>{t(data.phone || '')}</span>}
                {data.url && <span><a href={data.url} target="_blank" rel="noreferrer">{data.url}</a></span>}
            </div>
        </div>)
}
export default ContactCard