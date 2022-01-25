import { t } from "i18next"
import React from "react"
import { useLocation } from "react-router"
import { HashLink } from "react-router-hash-link"

export type TPageMap = { anchorTop: { id: string, text: string | null }, subAnchors: { id: string, text: string | null }[] }[]

function pageMap() {
    const pm = Array.from(document.querySelectorAll(`.__anchor_top`)).map(a0 => {
        return {
            anchorTop: { id: a0.id, text: a0.id }, subAnchors: Array.from(a0.querySelectorAll('.__anchor')).map(a => { return { id: a.id, text: a.textContent } })
        }
    })
    return pm
}
export default pageMap

export const Quickjump: React.FC<{data: TPageMap}> = ({data}) => {
    const location = useLocation()
    console.log('quicjump', location.pathname) 
    return (
        <>
        <h3>{t('Hop til: ')}</h3>
        {/* {JSON.stringify(data)} */}
        <div className="__Quickjump">
            {data.map((at, i) => 
            <ul key={i}>
                <li>
                    <HashLink to={`#${at.anchorTop.id}`}><h4>{at.anchorTop.text}</h4></HashLink>
                </li>
                {at.subAnchors.map((sa, i)=>
                    <li key={i}>
                        <HashLink to={`#${sa.id}`}><span>{sa.text}</span></HashLink>
                    </li>
                )
                }       
            </ul>)}
        </div>
        </>
    )
}