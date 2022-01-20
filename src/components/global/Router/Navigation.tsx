    import React from 'react'
    import { Link, useLocation, useNavigate } from 'react-router-dom';
    import styles from './Navigation.module.scss'
    import { UnauthRouteList, AuthRouteList} from './Router';
    import { TRoute } from './routes';
    import Header from 'components/ui/Header/Header.lazy';
    import SvgIcon from 'components/ui/SvgIcon/SvgIcon';
    // import { ActionType, useStateContext } from '_state';
    import httpRequest from '_http'
    import Loading from 'components/global/Loading/Loading';
    import axios from 'axios';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

    const Navigation: React.FC<{variant?: string, header?: boolean}> =  ({variant, header}) => {
       const [path, setPath] = React.useState<string>('')
       const [routes, setRoutes] = React.useState<TRoute[]>([])
       const location = useLocation();
       const navigate = useNavigate();

       React.useEffect(() => {
           setRoutes(UnauthRouteList)
           setPath(location.pathname);
           
       }, [location])
        return (
            <>
            {header ? 
            <Header>
                <NavContent {...{variant,routes,path}} />
            </Header> :
            <>
            <NavContent {...{ variant, routes, path }} />
            </>
            }
                
            </>
        )
    }

    export default Navigation;

const NavContent: React.FC<{ variant?: string, routes?: TRoute[], path: string }>  = ({variant, routes, path}) => {
    const { t } = useTranslation('navigation')
    return (
            <div className={`${styles.Navigation} ${variant && styles[variant]}`}>
                <nav>
                <ul>
                    {routes ? routes.filter((r) => r.name !== variant)
                        .map((r) =>
                            <li key={r.name}
                                className={
                                    `${(path.split('/')[1] === r.path.split('/')[1] || path === r.path) ? styles.active : ''} 
                                    ${styles.link}
                                    themed-title`
                                }>
                                <Link to={r.path} ><span>{t(`${r.name.toLowerCase()}`).toUpperCase()}</span></Link>
                            </li>
                        ) : <Loading />}
                </ul>
                </nav>
            </div>
        )
    }