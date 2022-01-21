import React, { lazy, Suspense } from 'react';
import {Props} from './Navigation'
const LazyNavigation = lazy(() => import('./Navigation'));

const Navigation = (props: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavigation {...props} />
  </Suspense>
);

export default Navigation;
