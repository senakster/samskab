import React, { lazy, Suspense } from 'react';

const LazyLayoutToggle = lazy(() => import('./LayoutToggle'));

const LayoutToggle = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayoutToggle {...props} />
  </Suspense>
);

export default LayoutToggle;
