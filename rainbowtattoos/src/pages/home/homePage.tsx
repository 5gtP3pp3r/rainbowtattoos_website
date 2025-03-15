import { JSX } from 'react';
import { Home } from './Home'
import { PageTemplate } from '../../PageTemplate';

export function HomePage(): JSX.Element {
  return (
    <PageTemplate 
      previous="/pages/contacts" 
      nextPage="/pages/portfolio" 
      bgImageClass="bg-home"
      txtColor='beige'
    >
      {<Home />}
    </PageTemplate>
  );
}