import { Suspense } from 'react';
import Router from '../Router/Router';
import { Styles } from './Styles';

const Index = () => (
  <Suspense>
    <Styles>
      <Router />
    </Styles>
  </Suspense>
);

export default Index;
