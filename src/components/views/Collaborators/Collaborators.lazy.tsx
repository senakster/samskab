import React, { lazy, Suspense } from 'react';

const LazyCollaborators = lazy(() => import('./Collaborators'));

const Collaborators = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCollaborators {...props} />
  </Suspense>
);

export default Collaborators;
