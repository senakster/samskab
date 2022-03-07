import React from 'react'
import { TResult } from '_data/resultsData'
import styles from './ResultCard.module.scss'
import { Trans, useTranslation } from 'react-i18next'
import publications, { TPublication } from '_data/publicationsData'
import { HashLink } from 'react-router-hash-link'
// type TResult = {
//     id: string;
//     title: string;
//     publication?: string | undefined;
//     url?: string | undefined;
//     description?: string | undefined;
//     cover?: string | undefined;
//     author?: (TPeople | undefined)[] | undefined;
const ResultCard: React.FC<{data: TResult, focus?: boolean, nonfocus: boolean | null}> = ({data, focus, nonfocus}) => {
    const {t} = useTranslation('results')
    const [active, setActive] = React.useState(focus)
    const [highlight, setHighlight] = React.useState(focus)
    function toggleActive(){
        setHighlight(false)
        setActive(!active)
    }
    return (
        <div  
        className={`${styles.ResultCard} 
        ${styles[data.status]}
         ${nonfocus ? styles.nonfocus : ''}
        ${active ? styles.active : ''}`}
        onClick={toggleActive}>
            {/* ID */}
            <span className="offset-anchor" id={data.id}></span>
            {/* TITLE */}
            <h4 className={styles.title}>
                <Trans ns="results" i18nKey={`${data.id}.title`}>{t(data.title)}</Trans>
            </h4>
            <div className={styles.collapse}>
                {/* COVER */}
                {data.cover &&
                    <div className={styles.cover}>
                        <img src={data.cover} alt={`${data.title} cover`} />
                    </div>
                }
                <ul>
                    {/* DESCRIPTION */}
                    {data.description && <li className={styles.description}>
                        <h4>{t('Beskrivelse')}</h4>
                        <span><Trans ns="results" i18nKey={`${data.id}.description`}>
                            {data.description}
                        </Trans></span>
                    </li>}
                    {/* PUBLICATION */}
                    {data.publication && 
                    <li className={styles.publication}>
                    <h4>{t('Publikation')}</h4>
                    <HashLink to={`#${data.publication}`}><span>{publications.find(p => p.id === data.publication)?.name}</span></HashLink> 
                    </li>}
                    {/* URL */}
                    {data.url &&
                        <li className={styles.url}>
                            <h4>{t('Link')}</h4>
                            <a href={data.url} target="_blank" rel="noreferrer"><span>{data.url}</span></a>
                        </li>}
                    {/* AUTHOR */}
                    {data.author &&
                    <li className={styles.url}>
                        <h4>{t('Forfatter', { count: data.author.length})}</h4>
                        {data.author.map(a => 
                            <span key={a?.id}>{a?.name}</span>
                         )}
                    </li>}
                    <li>
                        <h4>{t('Status')}</h4>
                        <span>{t(data.status)}</span>
                    </li>
                </ul>
            </div>
    </div>)
}

export default ResultCard