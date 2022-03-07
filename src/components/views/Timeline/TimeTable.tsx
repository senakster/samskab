import React from 'react'
import { useTranslation } from 'react-i18next'
import workPackages, { phases } from '_data/workPackagesData'
import styles from './Timetable.module.scss'

const TimeTable: React.FC = () => {
    const {t} = useTranslation('timeline')
    const [highlight, setHighlight] = React.useState<string>('all')

    function toggleHighlight(id: string) {
        setHighlight(id === highlight ? 'all' : id)
    }
    return (
    <div className={styles.Timetable}>
            <table>
                <thead>
                <tr>
                    <td></td>
                    {phases.map(p => <th key={p.id}>{`${p.name} ${t(p.description)}`}<br />({p.period.map(p => p).join(' - ')})</th>)}
                </tr>
                </thead>
                <tbody>
                {workPackages.map((wp) => 
                    <tr key={wp.id} onClick={() => toggleHighlight(wp.id)} className={highlight === wp.id || highlight === 'all' ? styles.active : ''}>
                        <th >{wp.id.toUpperCase()}</th>
                        {phases.map(p => wp.phases.includes(p.id) ? <td key={p.id} className={`${styles.active} ${styles[wp.id]}`} ></td> : <td key={p.id} className={`${styles.empty}`}></td>)}
                </tr>
                )}
                </tbody>
            </table>
    </div>
    )
}

export default TimeTable