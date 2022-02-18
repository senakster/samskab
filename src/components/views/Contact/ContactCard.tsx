import React from 'react'
import styles from './ContactCard.module.scss'
import { TPeople } from '_data/peopleData'
import { useTranslation } from 'react-i18next'

const ContactCard: React.FC<{ data: TPeople }> = ({ data }) => {
    const { t } = useTranslation('contact')
    return (
        <div className={styles.ContactCard}>
            <h3>{t(data.role || 'contact')}</h3>
            <div className={styles.pData}>
                {data.name && <label>{t('Navn')}: <span>{t(data.name)}</span></label>}
                {data.email && <label>{t('Email')}: <span><a href={`mailto:${data.email}?subject=SAMSKAB`}>{t(data.email || '')}</a></span></label>}
                {data.phone && <label>{t('Telefon')}: <span>{t(data.phone || '')}</span></label>}
                {data.url && <label>{t('Link')}: <span><a href={data.url} target="_blank" rel="noreferrer">{data.url}</a></span></label>}
            </div>
        </div>)
}
// email: 'quentin.gausset@anthro.ku.dk',
//     phone: '+45 51288550',
//         url: 'https://antropologi.ku.dk/ansatte/professorer/?pure=da/persons/151879'
export default ContactCard