import React, { lazy, Suspense } from 'react';

const LazyParticipants = lazy(() => import('./Participants'));

const Participants = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyParticipants {...props} />
  </Suspense>
);

export default Participants;
