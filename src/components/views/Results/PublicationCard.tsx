import React from 'react'
import { TResult } from '_data/resultsData'
import styles from './PublicationCard.module.scss'
import { Trans, useTranslation } from 'react-i18next'
import { TPublication } from '_data/publicationsData'

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
                    <a href={data.url} target="_blank" rel="noreferrer"><img src={data.cover} alt={`${data.title} cover`} /></a>
                </div>
                <div className={styles.name}>
                    <p>
                        <Trans ns="results" i18nKey={`${data.id}.name`}>{t(data.name)}</Trans>
                    </p>
                    {data.author && <p className={styles.authorList}><i>{data.author?.map(a => {
                        const name = <span className={styles.author}>{a?.name}</span>
                        return a?.email ? <a href={`mailto:${a?.email}`}>{name}</a> : name
                    }
                    )}</i></p>}
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