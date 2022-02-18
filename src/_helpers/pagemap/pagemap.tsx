import Button from "components/ui/Button/Button"
import btnStyle from "components/ui/Button/Button.module.scss"
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
    const [active, setActive] = React.useState<string>('')
    function changeActive (e: any){
        const { value } = e.target.dataset
        setActive(value === active ? '' : value)
    }
    const location = useLocation()
    return (
        <>
        <h4>{t('Hop til: ')}</h4>
        {/* {JSON.stringify(data)} */}
        <div className="__Quickjump">
            {data.map((at, i) => 
            <div key={i} className={`quickList`}>
            {/* <HashLink to={`#${at.anchorTop.id}`}><h4>{at.anchorTop.text}</h4></HashLink> */}
                    <Button className={`${active === at.anchorTop.id ? btnStyle.active : ''}`} label={at.anchorTop.text} data-value={at.anchorTop.id} onClick={changeActive} />
                    <ul className={`${active === at.anchorTop.id ? 'active' : ''}`} >
                    <li onClick={() => { setActive('') }}><HashLink to={`#${at.anchorTop.id}`}><h4>{at.anchorTop.text}</h4></HashLink></li>
                {at.subAnchors.map((sa, i)=>
                    <li key={i} onClick={() => {setActive('')}}>
                        <HashLink to={`#${sa.id}`}><span>{sa.text?.split(' - ')[0]}</span></HashLink>
                    </li>
                )
                }       
            </ul>
            </div>)}
        </div>
        </>
    )
}