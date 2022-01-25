import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import results from '_data/resultsData'
import { phases, TWorkPackage } from '_data/workPackagesData'
import styles from './WPBox.module.scss'

const WorkPackageBox: React.FC<{ data: TWorkPackage, active: string, openWP: (id: string) => void}> = ({ data, active, openWP }) => {
    const { t } = useTranslation('timeline')
    function setActive() {
        openWP(active === data.id ? '' : data.id)
    }

    return (
        <div  
        className={`${styles.WorkPackageBox} ${active === data.id? styles.active : ''}`}
        onClick={setActive}>
            <span className="offset-anchor-abs" id={data.id}></span>
            {/* <HashLink to={`#workPackages`}> */}
            <h3 className={`${styles.more}`} >
                <Trans ns="timeline" i18nKey={`${data.id}.name`}>
                    {data.name}
                </Trans>
                </h3>
            {/* </HashLink> */}
            <div className={`${styles.collapse}`}>
            <h4>{t('Faser')}</h4>
            <ul>
                {phases.map(p => data.phases.includes(p.id) &&
                    <li key={p.id}><i>
                        <Trans ns="timeline" i18nKey={`${p.id}.name`}>
                            {p.name}
                        </Trans>
                    </i></li>)}
            </ul>
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
            {/* <p>
                <Trans ns="results" i18nKey={`${data.id}.resultDescription`}>{data.resultsDescription}</Trans>
            </p> */}
            <ul>
                {results.find(r => r.wp === data.id)?.list.map((l) =>
                    <li key={l.id}><HashLink to={`/results#${l.id}`}><b>{t(`${l.title}`)}</b></HashLink>: {l.description}</li>
                )}
            </ul>
            </div>
        </div>
    )
}
export default WorkPackageBox