import React from 'react'
import { TPhase } from '_data/workPackagesData'
import workPackages from '_data/workPackagesData'
import styles from './PhaseBox.module.scss'
import { HashLink } from 'react-router-hash-link'
const PhaseBox: React.FC<{ data: TPhase, openWP: (id: string) => void }> = ({data, openWP}) => {
    return (
        <div className={styles.PhaseBox}>
            <h3>{data.name}</h3>
            <ul>
                {workPackages.filter(w => w.phases.includes(data.id))
                .map(w => 
                <li key={w.id} onClick={() => openWP(w.id)}>
                        {/* {w.name} */}
                    <HashLink to={`#workPackages`}>{w.name}</HashLink>
                    {/* <HashLink to={`#${w.id}`}>{w.name}</HashLink> */}
                </li>)}
            </ul>
            {/* <p>{data.description}</p> */}
        </div>
    )
}
export default PhaseBox