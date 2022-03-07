import Button from 'components/ui/Button/Button'
import TextIcon from 'components/ui/TextIcon/TextIcon'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import config from '_config'
import results from '_data/resultsData'
import { phases, TWorkPackage } from '_data/workPackagesData'
import styles from './WPBox.module.scss'

const WorkPackageBox: React.FC<{ data: TWorkPackage, active: string, openWP: (id: string) => void }> = ({ data, active, openWP }) => {
    const { t } = useTranslation('results')
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
            // onClick={setActive}
            >
            {/* <div className={styles.close}>
                <Button label="x" variant="singleCharClose" onClick={() => openWP('')} />
            </div> */}
            {data.img && <img className={styles.bgImage} src={data.img.replace('__PUBLICURL__', config.public_static)} alt="background" loading="lazy" />} 
            <h3 className={`${styles.more} ${styles.header} ${styles.flexHeader}`} >
                <TextIcon label={data.id} variant="circle" classes={['small']} color="#9AB9CB" />
                <Trans ns="timeline" i18nKey={`wp.${data.id}.name`}>
                    {data.name}
                </Trans>
            </h3>
            <div className={`${styles.collapse}`}>
                <h4 className={styles.bold}>{t('Faser', {ns: 'timeline'})}</h4>
                <div className={styles.flexHeader}>
                    {phases.map(p => data.phases.includes(p.id) &&
                        <TextIcon key={p.id} label={p.id} variant="circle" classes={['mini']} color="#66b760" title={t(p.description)} />
                    )}
                </div>
                <h4 className={styles.bold}>{t('Beskrivelse',{ ns: 'timeline' })}</h4>
                <div className={`${styles.description}`}>
                    {data.description.map((d, i) =>
                        <p key={i}>
                            <Trans ns="timeline" i18nKey={`wp.${data.id}.description.p${i}`}>
                                {d}
                            </Trans>
                        </p>)
                    }
                </div>
                <h4 className={styles.bold}>{t('Resultater',{ ns: 'timeline' })}</h4>
                <ul className={styles.results}>
                    {results.find(r => r.wp === data.id)?.list
                        .map((l) =>
                            <li key={l.id}>{l.display ? <HashLink to={`/results#${l.id}`}><b>{< Trans ns="results" i18nKey={`${l.id}.title`}>{`${l.title}`}</Trans>}</b></HashLink> : <b>{<Trans ns="results" i18nKey={`${l.id}.title`}>{`${l.title}`}</Trans>}</b>}: <Trans ns="results" i18nKey={`${l.id}.description`}> {l.description} </Trans></li>
                        )}
                </ul>
            </div>
        </div>
    )
}
export default WorkPackageBox