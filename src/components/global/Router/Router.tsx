import React, { Suspense } from 'react';
import ErrorBoundary from 'components/global/ErrorBoundary/ErrorBoundary';
import Error from 'components/global/Error/Error.lazy';
import { HashRouter as RouterElement, Route, Routes} from 'react-router-dom'
import styles from './Router.module.scss';
import RouteList, { TRoute } from './routes';
import Navigation from './Navigation.lazy';
import LanguageSelector from 'components/global/LanguageSelector/LanguageSelector';
import Loading from '../Loading/Loading';
import Header from 'components/ui/Header/Header.lazy';

export const UnauthRouteList: TRoute[] = [
  ...RouteList.filter((r) => ['Home', 'Results', 'Timeline','Collaborators'].includes(r.name))
]
export const AuthRouteList: TRoute[] = [
  ...RouteList.filter((r) => ['Home', 'Results', 'Timeline', 'Collaborators'].includes(r.name))
]

const Router: React.FC = () => {
  return (
    <div className={styles.Router} data-testid="Router">
      <ErrorBoundary>
        <RouterElement>
          <Header>
            <Navigation variant="collapse-top" />
          </Header>
          <article className={styles.content}>
          <Routes>
            {
              RouteList.map((r) =>
                <Route key={r.name} path={r.path} element={<r.component />} />
              )
            }
            <Route path="/*/*" element={<Error />} />
          </Routes>
          </article>
        </RouterElement>
      </ErrorBoundary>
    </div>
  );
}
export default Router;