import React, { lazy, Suspense } from 'react';

const LazyRouter = lazy(() => import('./Router'));

const Router = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRouter {...props} />
  </Suspense>
);

export default Router;
