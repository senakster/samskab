import React, { lazy, Suspense } from 'react';
import Loading from 'components/global/Loading/Loading.lazy';
import { Props } from './LanguageSelector'
const LazyLanguageSelector = lazy(() => import('./LanguageSelector'));

const LanguageSelector = (props: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode; }) => (
  <Suspense fallback={<Loading />}>
    <LazyLanguageSelector {...props} />
  </Suspense>
);

export default LanguageSelector;
