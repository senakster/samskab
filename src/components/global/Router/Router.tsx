import React from 'react';
import ErrorBoundary from 'components/global/ErrorBoundary/ErrorBoundary';
import Error from 'components/global/Error/Error.lazy';
import { HashRouter as RouterElement, Route, Routes } from 'react-router-dom'
import styles from './Router.module.scss';
import RouteList, { TRoute } from './routes';
import Navigation from './Navigation.lazy';
import Header from 'components/ui/Header/Header.lazy';
import Footer from 'components/ui/Footer/Footer.lazy';

export const UnauthRouteList: TRoute[] = [
  ...RouteList.filter((r) =>
    ['About', 'Results', 'Timeline', 'Participants', 'Collaborators', 'Contact']
      .includes(r.name))
]
export const AuthRouteList: TRoute[] = [
  ...RouteList.filter((r) =>
    ['About', 'Results', 'Timeline', 'Participants', 'Collaborators', 'Contact']
      .includes(r.name))
]

const Router: React.FC = () => {
  return (
    <div className={styles.Router} data-testid="Router">
      <ErrorBoundary>
        <RouterElement>
          <Header>
            <Navigation />
          </Header>
          <article className={styles.router_content}>
            <Routes>
              {
                RouteList.map((r) =>
                  <Route key={r.name} path={r.path} element={<r.component />} />
                )
              }
              <Route path="/**" element={<Error />} />
            </Routes>
          </article>
          <Footer>
          </Footer>
        </RouterElement>
      </ErrorBoundary>
    </div>
  );
}
export default Router;