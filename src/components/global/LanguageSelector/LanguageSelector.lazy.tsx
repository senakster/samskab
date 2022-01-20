import React, { lazy, Suspense } from 'react';
import Loading from 'components/global/Loading/Loading.lazy';

const LazyLanguageSelector = lazy(() => import('./LanguageSelector'));

const LanguageSelector = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<Loading />}>
    <LazyLanguageSelector {...props} />
  </Suspense>
);

export default LanguageSelector;
