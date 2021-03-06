import React from 'react'
import styles from './PublicationCard.module.scss'
import { Trans, useTranslation } from 'react-i18next'
import { TPublication } from '_data/publicationsData'
import _data from '_data'
import config from '_config'

const PublicationCard: React.FC<{data: TPublication}> = ({data}) => {
    const {t} = useTranslation('results')
    const [active, setActive] = React.useState(false)
    function toggleSummary(){
        setActive(!active)
    }
    return (
    <div className={styles.PublicationCard}>
            <span className="offset-anchor" id={data.id}></span>
            <h1>
                <Trans ns="results" i18nKey={`${data.id}.title`}>{t(data.title)}</Trans>
            </h1>
            <div className={styles.meta}>
                <div className={styles.cover}>
                    <a href={data.url.replace('__PUBLICURL__', config.public_static || '')} target="_blank" rel="noreferrer">
                        <img src={data.cover.replace('__PUBLICURL__',config.public_static || '')} alt={`${data.title} cover`} />
                    </a>
                </div>
                <div className={styles.name}>
                    <p>
                        <Trans ns="results" i18nKey={`${data.id}.name`}>{t(data.name)}</Trans>
                    </p>
                    {data.author && <p className={styles.authorList}>{data.author?.map((a,i) => {
                        // if (typeof a === 'string' && !_data.people.some(p => p.id === a)) return <span key={i} className={styles.author}>{a}</span>
                        const name = typeof a === 'string' && _data.people.some(p => p.id === a) ? <span key={`${i}-name`} className={styles.author}>{_data.people.find(p => p.id === a)!.name}</span> : <span key={`${i}-name`} className={styles.author}>{a}</span>
                        const author = typeof a === 'string' ? name : <a key={`${i}-email`} href={`mailto:${a.email}`}>{name}</a>                     
                        return author
                    }
                    )}</p>}
                    <p className={styles.published}>{data.published?.year}{data.published?.month && `/${data.published.month}`}</p>
                </div>
            </div>
        <h4 className={`${styles.toggleSummary} ${active ? styles.active : ''}`} onClick={toggleSummary}>{t('opsummering')}</h4>
        <p className={`${styles.summary} ${active ? styles.active : ''}`}>
            <Trans ns="results" i18nKey={`${data.id}.summary`}>
                {data.summary}
            </Trans>
        </p>
    </div>)
}

export default PublicationCard