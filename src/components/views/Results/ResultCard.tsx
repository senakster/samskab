import React from 'react'
import { TResult } from './reultsData'
import styles from './ResultCard.module.scss'

const ResultCard: React.FC<{data: TResult}> = ({data}) => {
    const [active, setActive] = React.useState(false)
    function toggleSummary(){
        setActive(!active)
    }
    return (
    <div className={styles.ResultCard}>
            <h1>{data.title}</h1>
            <div className={styles.meta}>
                <div className={styles.cover}>
                    <a href={data.url} target="_blank" rel="noreferrer"><img src={data.cover} alt={`${data.title} cover`} /></a>
                </div>
                <div className={styles.name}>
                    <p>{data.name}</p>
                    {data.author && <p className={styles.authorList}><i>{data.author?.map(a => {
                        const name = <span className={styles.author}>{a?.name}</span>
                        return a?.email ? <a href={`mailto:${a?.email}`}>{name}</a> : name
                    }
                    )}</i></p>}
                    <p className={styles.published}>{data.published.year}{data.published.month && `/${data.published.month}`}</p>
                </div>

        </div>
        <h4 className={`${styles.toggleSummary} ${active ? styles.active : ''}`} onClick={toggleSummary}>summary</h4>
        <p className={`${styles.summary} ${active ? styles.active : ''}`}>{data.summary}</p>
    </div>)
}

export default ResultCard