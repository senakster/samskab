import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss'
import { UnauthRouteList } from './Router';
import { TRoute } from './routes';
import { useTranslation } from 'react-i18next';
import FancyBurger from 'components/ui/FancyBurger/FancyBurger';


export type Props = { variant?: string}

const Navigation: React.FC<Props> = ({ variant}) => {
    const [path, setPath] = React.useState<string>('')
    const [routes, setRoutes] = React.useState<TRoute[]>([])
    const [modal, setModal] = React.useState<boolean>(false)

    const location = useLocation();

    React.useEffect(() => {
        setRoutes(UnauthRouteList)
        setPath(location.pathname);

    }, [location])

    function toggleMenu() {
        setModal(!modal)
    }
    function closeModal() {
        setModal(false)
    }
    return (
        <>
            <NavContent {...{ variant, routes, path, modal, closeModal }} />
            <FancyBurger show={modal} toggle={toggleMenu} />
        </>
    )
}

export default Navigation;

const NavContent: React.FC<{ variant?: string, routes?: TRoute[], path: string, modal?: boolean, closeModal: () => void }> =
    ({ variant, routes, path, modal, closeModal }) => {
        const { t } = useTranslation('navigation')
        return (
            <>
            
            <div className={`${styles.Modal}  ${modal ? styles.active : ''}`}>
                <NavList {...{routes,variant,path,closeModal}}/>
            </div>

            <div className={`${styles.Navigation} ${variant ? styles[variant] : ''}`}>
                <nav>
                    <ul>
                        {routes && routes.filter((r) => r.name !== variant)
                            // .filter(r => r.categories?.includes('about') || r.categories?.includes('ressources')) //Include categories in non-modal
                            .map((r) =>
                                <li key={r.name}
                                    className={
                                        `${(path.split('/')[1] === r.path.split('/')[1] || path === r.path) ? `${styles.active}` : ''} 
                                    ${styles.link}
                                    themed-title`
                                    }>
                                    <Link to={r.path} onClick={closeModal}><span>{t(`${r.name.toLowerCase()}`).toUpperCase()}</span></Link>
                                </li>
                            )}
                    </ul>
                </nav>
            </div>
            </>
        )
    }


const NavList: React.FC<{ routes?: TRoute[], variant?: string, path: string, closeModal: () => void}> = ({routes, variant, path, closeModal}) => {
        const { t } = useTranslation('navigation')
        return (
            <ul>
                {routes && routes.filter((r: TRoute) => r.name !== variant)
                    // .filter(r => r.categories?.includes('about') || r.categories?.includes('ressources')) //Include categories in non-modal
                    .map((r) =>
                        <li key={r.name}
                            className={
                                `${(path.split('/')[1] === r.path.split('/')[1] || path === r.path) ? `${styles.active}` : ''} 
                                    ${styles.link}
                                    themed-title`
                            }>
                            <Link to={r.path} onClick={closeModal}><span>{t(`${r.name.toLowerCase()}`).toUpperCase()}</span></Link>
                        </li>
                    )}
            </ul>
        )
    }