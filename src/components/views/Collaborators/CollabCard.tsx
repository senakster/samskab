import React from 'react'
import { TCollabor } from './collabData'
import styles from './CollabCard.module.scss'
import { Trans, useTranslation } from 'react-i18next'


const placeholder: TCollabor = {
    id: 'collab',
    name: 'Collaborator',
    logo: {
        id: 'co_logo',
        url: 'https://omstilmig.nu/GNF/assets/ON-logo.svg',
    },
    color: 'dodgerblue',
    href: 'https://omstilmig.nu/GNF/gnf-map/0.3.0/',
    description: 'Placeholder Descripton'
}
const CollabCard: React.FC<{data: TCollabor}> = ({data}) => {
    const {t} = useTranslation('collaborators')
    const [active, setActive] = React.useState(false)
    function toggleActive(){
        setActive(!active)
    }
    return (
        <div className={styles.CollabCard} style={{ '--brandColor': data.color || placeholder.color! } as React.CSSProperties} onClick={toggleActive}>
            <div>
                <div className={styles.filter}></div>
                <div className={styles.imgContainer}>
                <img src={data.logo?.url.replace('%PUBLIC_URL%',`${process.env.PUBLIC_URL}`) || placeholder.logo!.url} alt={`${data.logo?.id}`} />
                </div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.name}>{data.name}</h1>
                <a href={data.href} rel="noreferrer" target="_blank"><span>{data.href}</span></a>
                <p className={`${styles.more} ${active ? styles.active : ''}`}>{/*t('om')*/}</p>
                <p className={`${styles.description} ${active ? styles.active : ''}`}>
                    <Trans ns="collaborators" i18nKey={`${data.id}`}>
                    {data.description}
                    </Trans>
                </p>
            </div>
        </div>
    )
}

export default CollabCard