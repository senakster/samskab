import Button from 'components/ui/Button/Button'
import TextIcon from 'components/ui/TextIcon/TextIcon'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import results from '_data/resultsData'
import { phases, TWorkPackage } from '_data/workPackagesData'
import styles from './WPBox.module.scss'

const WorkPackageBox: React.FC<{ data: TWorkPackage, active: string, openWP: (id: string) => void }> = ({ data, active, openWP }) => {
    const { t } = useTranslation('timeline')
    // const [closing, setClosing] = React.useState(false)
    function setActive() {
        // setClosing(!active)
        // setTimeout(() => openWP(active === data.id ? '' : data.id), 1)
        openWP(active === data.id ? '' : data.id)
    }

    React.useEffect(() => {
        // const scrollEl = document.getElementById('workPackages')
        // active && scrollEl?.scrollIntoView()
    }, [active])
    return (
        <div
            className={`${styles.WorkPackageBox} ${active === data.id ? styles.active : ''}`}
            onClick={setActive}>
            <div className={styles.close}>
                <Button label="x" variant="singleCharClose" onClick={() => openWP('')} />
            </div>
            <h3 className={`${styles.more} ${styles.header} ${styles.flexHeader}`} >
                <TextIcon label={data.id} variant="circle" classes={['small']} color="#9AB9CB" />
                <Trans ns="timeline" i18nKey={`wp.${data.id}.name`}>
                    {data.name}
                </Trans>
            </h3>
            [THEMATIC BG IMG]
            <div className={`${styles.collapse}`}>
                <h4>{t('Faser')}</h4>
                <div className={styles.flexHeader}>
                    {phases.map(p => data.phases.includes(p.id) &&
                        <TextIcon key={p.id} label={p.id} variant="circle" classes={['mini']} color="#66b760" title={t(p.description)} />
                    )}
                </div>
                <h4>{t('Beskrivelse')}</h4>
                <div className={`${styles.description}`}>
                    {data.description.map((d, i) =>
                        <p key={i}>
                            <Trans ns="results" i18nKey={`${data.id}.description.p${i}`}>
                                {d}
                            </Trans>
                        </p>)
                    }
                </div>
                <h4>{t('Resultater')}</h4>
                <ul className={styles.results}>
                    {results.find(r => r.wp === data.id)?.list
                        .map((l) =>
                            <li key={l.id}>{l.display ? <HashLink to={`/results#${l.id}`}><b>{t(`${l.title}`)}</b></HashLink> : <b>{t(`${l.title}`)}</b>}: {l.description}</li>
                        )}
                </ul>
            </div>
        </div>
    )
}
export default WorkPackageBox