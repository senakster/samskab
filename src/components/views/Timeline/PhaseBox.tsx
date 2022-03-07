import React from 'react'
import { TPhase } from '_data/workPackagesData'
import workPackages from '_data/workPackagesData'
import styles from './PhaseBox.module.scss'
import { HashLink } from 'react-router-hash-link'
import { Trans, useTranslation } from 'react-i18next'
import TextIcon from 'components/ui/TextIcon/TextIcon'

const PhaseBox: React.FC<{ data: TPhase, openWP: (id: string) => void }> = ({data, openWP}) => {
    const {t} = useTranslation('timeline')
    return (
        <div className={styles.PhaseBox}>
            <h3 className={styles.header}>
                <TextIcon label={`${data.id}`} variant="circle" classes={['small']} color="#66B760" title={t(data.description)}/>
                <span><Trans ns="timeline" i18nKey={`phases.${data.id}`}>
                    {`${data.description}`}
                </Trans>    
                </span>
            </h3>
            <ul>
                {workPackages.filter(w => w.phases.includes(data.id))
                .map(w => 
                <li key={w.id} onClick={() => openWP(w.id)}>
                    <HashLink to={`#workPackages`}>
                            <Trans ns="timeline" i18nKey={`wp.${w.id}.name`}>
                                {w.name}
                            </Trans>
                    </HashLink>
                </li>)}
            </ul>
            {/* <p>{data.description}</p> */}
        </div>
    )
}
export default PhaseBox